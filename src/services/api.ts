// API Service for connecting to the FastAPI backend
// This file provides functions to fetch data from the backend API

// Automatically detect environment and use appropriate API URL
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
  ? '/api'  // In production, backend serves from same origin
  : 'http://localhost:8000/api';  // In development, use local backend

// Generic fetch function with error handling
async function apiRequest(endpoint: string, options: RequestInit = {}) {
  try {
    
    const response = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Request failed:', error);
    throw error;
  }
}

// Portfolio API functions
export const portfolioAPI = {
  // Get all projects
  async getProjects() {
    return apiRequest('/projects');
  },

  // Get skills and technologies
  async getSkills() {
    return apiRequest('/skills');
  },

  // Get about information
  async getAbout() {
    return apiRequest('/about');
  },

  // Get contact information
  async getContactInfo() {
    return apiRequest('/contact');
  },

  // Submit contact form
  async submitContactForm(contactData: {
    name: string;
    lastname: string;
    email: string;
    subject: string;
    message: string;
  }) {
    return apiRequest('/contact', {
      method: 'POST',
      body: JSON.stringify(contactData),
    });
  },

  // Health check
  async healthCheck() {
    return apiRequest('/hello');
  },
};

// TypeScript interfaces for the API responses
export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  icon: string;
  links: {
    live: string;
    github: string;
  };
}

export interface ProjectsResponse {
  projects: Project[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface SkillsResponse {
  skill_categories: SkillCategory[];
  technologies: string[];
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface AboutResponse {
  features: Feature[];
  description: string[];
  experience_years: number;
  projects_completed: number;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href: string;
}

export interface ContactResponse {
  contact_info: ContactInfo[];
  availability: {
    status: string;
    title: string;
    description: string;
  };
}

export interface ContactSubmissionResponse {
  success: boolean;
  message: string;
  timestamp: string;
}