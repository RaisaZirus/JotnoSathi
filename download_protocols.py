"""
download_protocols.py
─────────────────────
Downloads the 5 WHO/MSF clinical protocol PDFs into backend/data/.
Run this ONCE before re-running ingest.py.

Your two existing PDFs in backend/data/ are untouched — this only adds new files.

Usage:
    python download_protocols.py
"""

import os
import requests

PROTOCOLS = [
    {
        "disease":  "dengue",
        "filename": "who_dengue_guidelines.pdf",
        "url":      "https://apps.who.int/iris/bitstream/handle/10665/44188/9789241547871_eng.pdf",
        "desc":     "WHO Dengue Guidelines for Diagnosis, Treatment, Prevention & Control (2009)",
    },
    {
        "disease":  "measles",
        "filename": "msf_measles_epidemic_management.pdf",
        "url":      "https://medicalguidelines.msf.org/sites/default/files/pdf/guideline-498-en.pdf",
        "desc":     "MSF Management of a Measles Epidemic — WHO case definitions, community level",
    },
    {
        "disease":  "maternal",
        "filename": "who_anc_recommendations_2016.pdf",
        "url":      "https://iris.who.int/bitstream/handle/10665/250796/9789241549912-eng.pdf",
        "desc":     "WHO ANC Recommendations for a Positive Pregnancy Experience (2016)",
    },
    {
        "disease":  "diabetes",
        "filename": "who_pen_diabetes_type2_management.pdf",
        "url":      "https://iris.who.int/server/api/core/bitstreams/2a0b4f68-7155-4ad1-b543-945791e31830/content",
        "desc":     "WHO-PEN Diagnosis & Management of Type 2 Diabetes — primary care, low-resource settings",
    },
    {
        "disease":  "bp",
        "filename": "who_hypertension_pharmacological_treatment_2021.pdf",
        "url":      "https://iris.who.int/server/api/core/bitstreams/f062769d-f075-4a00-87af-0a2106e0bd04/content",
        "desc":     "WHO Guideline for Pharmacological Treatment of Hypertension in Adults (2021)",
    },
]

DATA_DIR = os.path.join("backend", "data")
os.makedirs(DATA_DIR, exist_ok=True)

print("=" * 60)
print("Niramoy — Protocol PDF Downloader")
print("=" * 60)

# Show what's already in backend/data/
existing = [f for f in os.listdir(DATA_DIR) if f.endswith(".pdf")]
if existing:
    print(f"\n📁 Existing PDFs in backend/data/ (will NOT be touched):")
    for f in existing:
        print(f"   • {f}")
print()

headers = {
    "User-Agent": "Mozilla/5.0 (compatible; Niramoy/1.0; research use)"
}

success, skipped, failed = [], [], []

for p in PROTOCOLS:
    dest = os.path.join(DATA_DIR, p["filename"])

    if os.path.exists(dest):
        size_kb = os.path.getsize(dest) // 1024
        print(f"⏭️  Already exists — skipping: {p['filename']} ({size_kb} KB)")
        skipped.append(p["filename"])
        continue

    print(f"⬇️  Downloading [{p['disease'].upper()}]: {p['desc']}")
    print(f"    → {p['url'][:70]}...")

    try:
        resp = requests.get(p["url"], headers=headers, timeout=120, stream=True)
        resp.raise_for_status()

        # Verify it's actually a PDF
        content_type = resp.headers.get("Content-Type", "")
        if "html" in content_type.lower():
            print(f"    ⚠️  Server returned HTML instead of PDF — skipping.")
            failed.append(p["filename"])
            continue

        with open(dest, "wb") as f:
            for chunk in resp.iter_content(chunk_size=8192):
                f.write(chunk)

        size_kb = os.path.getsize(dest) // 1024
        print(f"    ✅ Saved: {p['filename']} ({size_kb} KB)\n")
        success.append(p["filename"])

    except requests.exceptions.Timeout:
        print(f"    ❌ Timeout — try again or download manually.\n")
        failed.append(p["filename"])
    except requests.exceptions.RequestException as e:
        print(f"    ❌ Failed: {e}\n")
        failed.append(p["filename"])

# ── Summary ───────────────────────────────────────────────────────────────────
print("=" * 60)
print("Summary")
print("=" * 60)
if success:
    print(f"✅ Downloaded ({len(success)}):  {', '.join(success)}")
if skipped:
    print(f"⏭️  Skipped ({len(skipped)}):    {', '.join(skipped)}")
if failed:
    print(f"❌ Failed ({len(failed)}):     {', '.join(failed)}")

all_pdfs = [f for f in os.listdir(DATA_DIR) if f.endswith(".pdf")]
print(f"\n📁 backend/data/ now has {len(all_pdfs)} PDF(s) total:")
for f in sorted(all_pdfs):
    size_kb = os.path.getsize(os.path.join(DATA_DIR, f)) // 1024
    print(f"   • {f} ({size_kb} KB)")

if failed:
    print("\n⚠️  Some downloads failed. Manual download links:")
    for p in PROTOCOLS:
        if p["filename"] in failed:
            print(f"\n   [{p['disease'].upper()}] {p['desc']}")
            print(f"   Save as: backend/data/{p['filename']}")
            print(f"   URL: {p['url']}")
else:
    print("\n🎉 All done! Now run:")
    print("   python -m backend.rag.ingest")
    print("   (or however you invoke ingest.py)")