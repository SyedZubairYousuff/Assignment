from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Fun Facts API")

# Allow frontend to call backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # allow all frontend URLs
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

facts = [
    {"id": 1, "fact": "The sun is a star."},
    {"id": 2, "fact": "Water boils at 100°C."},
    {"id": 3, "fact": "Earth has one moon."},
    {"id": 4, "fact": "Mars is known as the Red Planet."},
    {"id": 5, "fact": "Lightning is hotter than the sun."}
]


@app.get("/api/health")
def health_check():
    return {"status": "ok", "message": "Backend is running"}

@app.get("/api/facts")
def get_facts():
    return {
        "count": len(facts),
        "facts": facts
    }

@app.get("/api/facts/{fact_id}")
def get_fact_by_id(fact_id: int):
    for fact in facts:
        if fact["id"] == fact_id:
            return fact

    raise HTTPException(status_code=404, detail="Fact not found")
