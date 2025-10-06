from fastapi import APIRouter, HTTPException
from app import schemas
from app.data import (
    PROJECTS_DATA, 
    SKILLS_DATA, 
    TECHNOLOGIES_DATA, 
    ABOUT_FEATURES, 
    ABOUT_DESCRIPTION, 
    CONTACT_INFO, 
    AVAILABILITY_INFO
)
from datetime import datetime
import logging

router = APIRouter()

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@router.get("/hello", response_model=schemas.HelloResponse)
async def hello():
    """
    Simple health / greeting endpoint.
    GET /api/hello
    """
    return {"message": "Hello from FastAPI backend!"}

@router.post("/echo", response_model=schemas.EchoResponse)
async def echo(payload: schemas.EchoRequest):
    """
    Echo endpoint to demonstrate POST with JSON body.
    POST /api/echo
    """
    return {"received": payload}

@router.get("/projects", response_model=schemas.ProjectsResponse)
async def get_projects():
    """
    Get all portfolio projects.
    GET /api/projects
    """
    try:
        return schemas.ProjectsResponse(projects=PROJECTS_DATA)
    except Exception as e:
        logger.error(f"Error fetching projects: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.get("/skills", response_model=schemas.SkillsResponse)
async def get_skills():
    """
    Get all skills and technologies.
    GET /api/skills
    """
    try:
        return schemas.SkillsResponse(
            skill_categories=SKILLS_DATA,
            technologies=TECHNOLOGIES_DATA
        )
    except Exception as e:
        logger.error(f"Error fetching skills: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.get("/about", response_model=schemas.AboutResponse)
async def get_about():
    """
    Get about information.
    GET /api/about
    """
    try:
        return schemas.AboutResponse(
            features=ABOUT_FEATURES,
            description=ABOUT_DESCRIPTION,
            experience_years=5,  # Adjust as needed
            projects_completed=len(PROJECTS_DATA)
        )
    except Exception as e:
        logger.error(f"Error fetching about info: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.get("/contact", response_model=schemas.ContactResponse)
async def get_contact():
    """
    Get contact information.
    GET /api/contact
    """
    try:
        return schemas.ContactResponse(
            contact_info=CONTACT_INFO,
            availability=AVAILABILITY_INFO
        )
    except Exception as e:
        logger.error(f"Error fetching contact info: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.post("/contact", response_model=schemas.ContactSubmissionResponse)
async def submit_contact_form(contact_data: schemas.ContactRequest):
    """
    Submit contact form.
    POST /api/contact
    """
    try:
        # Log the contact submission (in a real app, you'd save to database or send email)
        logger.info(f"Contact form submission: {contact_data.name} {contact_data.lastname} - {contact_data.email}")
        logger.info(f"Subject: {contact_data.subject}")
        logger.info(f"Message: {contact_data.message}")
        
        # Here you could add email sending logic, database storage, etc.
        # For now, we'll just return a success response
        
        return schemas.ContactSubmissionResponse(
            success=True,
            message="Mensagem enviada com sucesso! Entrarei em contato em breve.",
            timestamp=datetime.now()
        )
    except Exception as e:
        logger.error(f"Error processing contact form: {e}")
        return schemas.ContactSubmissionResponse(
            success=False,
            message="Erro ao enviar mensagem. Tente novamente.",
            timestamp=datetime.now()
        )