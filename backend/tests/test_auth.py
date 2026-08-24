from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_register_and_login():
    payload = {"email": "caseworker-auth@example.gov", "full_name": "Case Worker", "password": "StrongPass123!"}
    created = client.post("/api/v1/auth/register", json=payload)
    assert created.status_code == 201
    body = created.json()
    assert body["token_type"] == "bearer"
    assert body["user"]["role"] == "citizen"
    assert body["access_token"]

    logged_in = client.post("/api/v1/auth/login", json={"email": payload["email"], "password": payload["password"]})
    assert logged_in.status_code == 200
    assert logged_in.json()["user"]["email"] == payload["email"]
