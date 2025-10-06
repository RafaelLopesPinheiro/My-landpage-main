from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

# Legacy schemas
class HelloResponse(BaseModel):
    message: str

class EchoRequest(BaseModel):
    name: str
    message: str

class EchoResponse(BaseModel):
    received: EchoRequest

# Portfolio data schemas
class ProjectLinks(BaseModel):
    live: str
    github: str

class Project(BaseModel):
    title: str
    description: str
    image: str
    tags: List[str]
    icon: str
    links: ProjectLinks

class ProjectsResponse(BaseModel):
    projects: List[Project]

class Skill(BaseModel):
    name: str
    level: int

class SkillCategory(BaseModel):
    title: str
    skills: List[Skill]

class SkillsResponse(BaseModel):
    skill_categories: List[SkillCategory]
    technologies: List[str]

class Feature(BaseModel):
    icon: str
    title: str
    description: str

class AboutResponse(BaseModel):
    features: List[Feature]
    description: List[str]
    experience_years: int
    projects_completed: int

class ContactInfo(BaseModel):
    icon: str
    label: str
    value: str
    href: str

class ContactResponse(BaseModel):
    contact_info: List[ContactInfo]
    availability: dict

class ContactRequest(BaseModel):
    name: str
    lastname: str
    email: str
    subject: str
    message: str

class ContactSubmissionResponse(BaseModel):
    success: bool
    message: str
    timestamp: datetime