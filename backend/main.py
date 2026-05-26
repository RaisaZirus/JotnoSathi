from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from backend.rag.query import load_rag_chain, query
from deep_translator import GoogleTranslator

app = FastAPI(title="Niramoy API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

# Load RAG chain once at startup
print("🔄 Loading Niramoy AI engine...")
db, llm = load_rag_chain()
print("✅ Ready!")

class TriageRequest(BaseModel):
    symptoms: str
    language: str = "en"  # "en" or "bn"

class TriageResponse(BaseModel):
    raw_response: str
    language: str

@app.get("/health")
def health_check():
    return {"status": "online", "model": "phi3:mini"}

@app.post("/triage", response_model=TriageResponse)
def triage(request: TriageRequest):
    symptoms = request.symptoms
    
    # If Bangla input, translate to English first
    if request.language == "bn":
        symptoms = GoogleTranslator(source="bn", target="en").translate(symptoms)
    
    # Run RAG query
    result = query(symptoms, db, llm)
    
    # If Bangla requested, translate response back
    if request.language == "bn":
        result = GoogleTranslator(source="en", target="bn").translate(result)
    
    return TriageResponse(raw_response=result, language=request.language)

@app.get("/protocols")
def list_protocols():
    return {
        "protocols": [
            "WHO IMCI Guidelines",
            "WHO ANC Guidelines"
        ]
    }