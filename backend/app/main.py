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
    allow_origins=[o.strip() for o in origins if o.strip()],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API routes
from app.routers import root
app.include_router(root.router, prefix="/api")

# Serve static files (built React app) in production
static_dir = "static"
if os.path.exists(static_dir):
    # Mount static assets with proper caching
    app.mount("/assets", StaticFiles(directory=f"{static_dir}/assets"), name="assets")
    
    @app.get("/")
    async def serve_frontend():
        """Serve the main React app"""
        return FileResponse(f"{static_dir}/index.html")
    
    @app.get("/{full_path:path}")
    async def serve_spa(full_path: str):
        """Serve React app for all non-API routes (SPA routing)"""
        # Don't intercept API routes
        if full_path.startswith("api/"):
            return
        
        # Check if it's a static file request
        file_path = f"{static_dir}/{full_path}"
        if os.path.isfile(file_path):
            return FileResponse(file_path)
            
        # Serve index.html for all other routes (SPA)
        return FileResponse(f"{static_dir}/index.html")

# Health check endpoint for Railway
@app.get("/health")
async def health_check():
    """Health check for Railway and monitoring"""
    return {"status": "healthy", "service": "Rafael Lopes Portfolio"}