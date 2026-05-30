"""
Run this ONCE locally to extract WHO documents from ChromaDB into docs.json.
Usage: python extract_docs.py
"""
import json, os
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import Chroma

persist_dir = "backend/rag/db"

print("Loading ChromaDB...")
embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
db = Chroma(persist_directory=persist_dir, embedding_function=embeddings)

# Get all documents
collection = db._collection
results = collection.get(include=["documents", "metadatas"])

docs = []
for text, meta in zip(results["documents"], results["metadatas"]):
    docs.append({"text": text, "meta": meta or {}})

output_path = "backend/rag/docs.json"
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(docs, f, ensure_ascii=False, indent=2)

print(f"✅ Extracted {len(docs)} document chunks → {output_path}")