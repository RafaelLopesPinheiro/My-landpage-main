from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI(title="Rafael Lopes Portfolio", version="1.0.0")

# Get CORS origins from environment
origins = os.getenv("CORS_ORIGINS", "*").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://rafaellopespinheiro.github.io",
        "http://localhost:5173",
        "http://localhost:8080",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API routes
from app.routers import root
app.include_router(root.router, prefix="/api")

# Serve static files (built React app)
static_dir = "static"
if os.path.exists(static_dir):
    app.mount("/assets", StaticFiles(directory=f"{static_dir}/assets"), name="assets")
    
    @app.get("/")
    async def serve_frontend():
        return FileResponse(f"{static_dir}/index.html")
    
    @app.get("/{full_path:path}")
    async def serve_spa(full_path: str):
        if full_path.startswith("api/"):
            return
        
        file_path = f"{static_dir}/{full_path}"
        if os.path.isfile(file_path):
            return FileResponse(file_path)
            
        return FileResponse(f"{static_dir}/index.html")