import os
import subprocess
import sys

print("🚀 Setting up Niramoy project...")

# Step 1: Create venv
print("\n📦 Creating virtual environment...")
subprocess.run([sys.executable, "-m", "venv", "venv", "--without-pip"], check=True)

# Step 2: Get pip
print("\n📥 Installing pip...")
subprocess.run(["curl", "https://bootstrap.pypa.io/get-pip.py", "-o", "get-pip.py"], check=True)

# Step 3: Install packages
print("\n📚 Installing dependencies...")
pip_path = os.path.join("venv", "Scripts", "pip") if os.name == "nt" else os.path.join("venv", "bin", "pip")
subprocess.run([pip_path, "install", "langchain", "langchain-community", "chromadb", 
                "fastapi", "uvicorn", "pypdf", "sentence-transformers", "deep-translator"], check=True)

print("\n✅ Done! Now install Ollama from https://ollama.com/download")
print("Then run: ollama pull tinyllama")