from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import Chroma

def ingest_documents(pdf_paths: list, persist_dir: str = "backend/rag/db"):
    print("📚 Loading documents...")
    all_docs = []
    
    for path in pdf_paths:
        loader = PyPDFLoader(path)
        docs = loader.load()
        all_docs.extend(docs)
        print(f"✅ Loaded: {path} ({len(docs)} pages)")

    print("\n✂️ Splitting into chunks...")
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=500,
        chunk_overlap=50
    )
    chunks = splitter.split_documents(all_docs)
    print(f"✅ {len(chunks)} chunks created")

    print("\n🔍 Creating embeddings and storing...")
    embeddings = HuggingFaceEmbeddings(
        model_name="sentence-transformers/all-MiniLM-L6-v2"
    )
    db = Chroma.from_documents(chunks, embeddings, persist_directory=persist_dir)
    print(f"✅ Knowledge base saved to {persist_dir}")
    return db

if __name__ == "__main__":
    import os
    pdfs = [os.path.join("backend/data", f) 
            for f in os.listdir("backend/data") if f.endswith(".pdf")]
    
    if not pdfs:
        print("⚠️ No PDFs found in backend/data/ — add your protocol PDFs first!")
    else:
        ingest_documents(pdfs)