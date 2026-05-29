import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), '..', '..'))

from backend.auth.models import SessionLocal, User, init_db
from backend.auth.utils import hash_password

init_db()
db = SessionLocal()

users = [
    User(username="raisa", hashed_password=hash_password("test123"), division="Dhaka", role="admin"),
    User(username="worker1", hashed_password=hash_password("test123"), division="Rajshahi", role="worker"),
    User(username="worker2", hashed_password=hash_password("test123"), division="Mymensingh", role="worker"),
]

db.add_all(users)
db.commit()
db.close()
print("Users seeded!")