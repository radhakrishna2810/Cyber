# AI-Powered Cyber Crime Reporting Portal

A modular, production-oriented foundation for an AI-assisted cybercrime reporting and case management system. The implementation is intentionally delivered one module at a time so each slice can be reviewed before the next module is added.

## Module 1: Project Structure and Authentication

### Delivered
- Next.js 15 frontend foundation with a reviewed landing experience and a dedicated authentication entry page.
- FastAPI backend application with versioned REST routing and generated OpenAPI documentation.
- SQLAlchemy user model with role-based foundations for `citizen`, `investigator`, and `administrator` accounts.
- Email/password registration and login endpoints that hash passwords with bcrypt and return JWT bearer tokens.
- Dockerfiles for the frontend and backend plus Docker Compose with PostgreSQL.
- GitHub Actions CI for frontend type/build checks and backend tests.

### API endpoints
- `GET /health` — service health check.
- `POST /api/v1/auth/register` — create a citizen account and receive a JWT.
- `POST /api/v1/auth/login` — authenticate and receive a JWT.
- `GET /api/v1/openapi.json` — OpenAPI schema.

## Local setup

### Frontend
```bash
npm install
npm run dev
```

### Backend
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Docker Compose
```bash
docker compose up --build
```

The frontend runs on `http://localhost:3000` and the API runs on `http://localhost:8000`.

## Environment variables

| Name | Default | Purpose |
| --- | --- | --- |
| `DATABASE_URL` | `sqlite:///./dev.db` | SQLAlchemy database connection string. Use PostgreSQL in production. |
| `JWT_SECRET` | `change-me-in-production` | Signing key for JWT access tokens. Replace with a long random secret. |

## Security and privacy notes

This is not yet ready for live evidence intake. Before real-world deployment, add privacy notices, retention policies, encryption-at-rest, malware scanning, object-storage access controls, jurisdiction-specific compliance review, incident response playbooks, and operational monitoring.

## Suggested next module

Review Module 1, then continue with: **Implement the complaint submission API.**
