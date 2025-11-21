// API Service for GitHub Pages - uses local data instead of backend
import { PROJECTS_DATA, SKILLS_DATA, TECHNOLOGIES_DATA, ABOUT_FEATURES, ABOUT_DESCRIPTION, CONTACT_INFO, AVAILABILITY_INFO } from './localData';

// Type definitions
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

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href: string;
}

// Portfolio API using local data
export const portfolioAPI = {
  async getProjects() {
    return { projects: PROJECTS_DATA };
  },

  async getSkills() {
    return {
      skill_categories: SKILLS_DATA,
      technologies: TECHNOLOGIES_DATA
    };
  },

  async getAbout() {
    return {
      features: ABOUT_FEATURES,
      description: ABOUT_DESCRIPTION,
      experience_years: 5,
      projects_completed: PROJECTS_DATA.length
    };
  },

  async getContactInfo() {
    return {
      contact_info: CONTACT_INFO,
      availability: AVAILABILITY_INFO
    };
  },

  async submitContactForm(contactData: {
    name: string;
    lastname: string;
    email: string;
    subject: string;
    message: string;
  }) {
    // For GitHub Pages, just log the submission
    console.log('Contact form submitted:', contactData);
    return {
      success: true,
      message: 'Mensagem registrada! Como este é um site estático, entre em contato diretamente pelo email.',
      timestamp: new Date().toISOString()
    };
  },

  async healthCheck() {
    return { message: 'Frontend running on GitHub Pages' };
  },
};