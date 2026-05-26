from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_community.llms import Ollama
from langchain_core.prompts import PromptTemplate

def load_rag_chain(persist_dir: str = "backend/rag/db"):
    embeddings = HuggingFaceEmbeddings(
        model_name="sentence-transformers/all-MiniLM-L6-v2"
    )
    
    db = Chroma(persist_directory=persist_dir, embedding_function=embeddings)
    llm = Ollama(model="phi3:mini")
    
    return db, llm

def query(question: str, db, llm):
    docs = db.similarity_search(question, k=3)
    context = "\n\n".join([doc.page_content for doc in docs])
    
    prompt = f"""
You are a clinical decision support assistant for Bangladeshi community health workers.
Use ONLY the provided context from WHO/DGHS protocols.
Respond in simple, clear language a health worker can act on immediately.

Context: {context}

Patient situation: {question}

Respond with:
RISK LEVEL: (Low / Medium / High)
IMMEDIATE ACTION: (what to do right now)
REFERRAL NEEDED: (Yes / No)
REASON: (brief explanation)
"""
    response = llm.invoke(prompt)
    return response

if __name__ == "__main__":
    print("🔄 Loading RAG chain...")
    db, llm = load_rag_chain()
    
    print("✅ Ready! Testing with sample case...\n")
    result = query(
        "Pregnant woman, 32 weeks, blood pressure 160/110, headache, blurred vision",
        db, llm
    )
    print(result)