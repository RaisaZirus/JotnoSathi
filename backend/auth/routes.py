from .utils import verify_password, create_token, decode_token, hash_password
from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from .models import User, SessionLocal
from .utils import verify_password, create_token, decode_token

from pydantic import BaseModel


class RegisterRequest(BaseModel):
    username: str
    password: str
    division: str

router = APIRouter(prefix="/auth", tags=["auth"])
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/login")
def login(form: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == form.username).first()
    if not user or not verify_password(form.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    token = create_token({"sub": user.username, "role": user.role, "division": user.division})
    return {"access_token": token, "token_type": "bearer"}

@router.get("/me")
def get_me(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    try:
        payload = decode_token(token)
        user = db.query(User).filter(User.username == payload["sub"]).first()
        if not user:
            raise HTTPException(status_code=401)
        return {"username": user.username, "division": user.division, "role": user.role}
    except:
        raise HTTPException(status_code=401, detail="Invalid token")
    

@router.post("/register")
def register(req: RegisterRequest, db: Session = Depends(get_db)):
    existing = db.query(User).filter(User.username == req.username).first()
    if existing:
        raise HTTPException(status_code=400, detail="Username already taken")
    new_user = User(
        username=req.username,
        hashed_password=hash_password(req.password),
        division=req.division,
        role="worker"
    )
    db.add(new_user)
    db.commit()
    return {"message": "Account created successfully"}