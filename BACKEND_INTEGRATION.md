# Portfolio Website - FastAPI Backend Integration

## Overview
This project now includes a fully functional FastAPI backend that serves portfolio data and handles contact form submissions. The backend is connected to the React frontend through a comprehensive API service.

## Backend Features

### 🚀 API Endpoints
- **GET /api/hello** - Health check endpoint
- **GET /api/projects** - Get all portfolio projects
- **GET /api/skills** - Get skills and technologies
- **GET /api/about** - Get about information
- **GET /api/contact** - Get contact information
- **POST /api/contact** - Submit contact form

### 📊 API Documentation
Visit `http://localhost:8000/docs` for interactive API documentation (Swagger UI)

## Getting Started

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Start the server:
   ```bash
   python -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
   ```

4. The backend will be available at `http://localhost:8000`

### Frontend Setup
1. Install dependencies:
   ```bash
   npm install
   # or
   bun install
   ```

2. Start the development server:
   ```bash
   npm run dev
   # or
   bun run dev
   ```

3. The frontend will be available at `http://localhost:8080`

## Architecture

### Backend Structure
```
backend/
├── app/
│   ├── main.py          # FastAPI application setup
│   ├── schemas.py       # Pydantic models for API responses
│   ├── data.py          # Portfolio data storage
│   └── routers/
│       ├── __init__.py
│       └── root.py      # API route handlers
├── .env                 # Environment variables
├── requirements.txt     # Python dependencies
└── README.MD
```

### Key Backend Components

#### 1. Data Models (schemas.py)
- **ProjectsResponse** - Portfolio projects data
- **SkillsResponse** - Skills and technologies
- **AboutResponse** - About section information
- **ContactResponse** - Contact information
- **ContactRequest** - Contact form submission
- **ContactSubmissionResponse** - Contact form response

#### 2. Data Storage (data.py)
Static data for the portfolio including:
- Project details with GitHub links
- Skills categorized by domain
- About features and descriptions
- Contact information

#### 3. API Routes (routers/root.py)
- Portfolio data endpoints
- Contact form submission with logging
- Error handling and validation

### Frontend Integration

#### API Service (src/services/api.ts)
Provides TypeScript-typed functions for:
- Fetching portfolio data
- Submitting contact forms
- Error handling
- Type definitions

#### Example Usage
```typescript
import { portfolioAPI } from '@/services/api';

// Get projects
const projects = await portfolioAPI.getProjects();

// Submit contact form
const response = await portfolioAPI.submitContactForm({
  name: 'John',
  lastname: 'Doe',
  email: 'john@example.com',
  subject: 'Project Inquiry',
  message: 'Hello!'
});
```

## Features

### ✅ Completed
- [x] FastAPI backend with CORS support
- [x] Portfolio data API endpoints
- [x] Contact form submission endpoint
- [x] Comprehensive data models
- [x] API documentation with Swagger
- [x] Frontend API service with TypeScript
- [x] Error handling and validation
- [x] Example React component integration

### 🔄 CORS Configuration
The backend is configured to accept requests from:
- `http://localhost:3000` (default React dev server)
- `http://localhost:8080` (Vite dev server)

### 📝 Contact Form
- Full form validation
- Success/error message handling
- Backend logging of submissions
- Email format validation

## Development Notes

### Environment Variables
Backend environment variables in `.env`:
```
PORT=8000
CORS_ORIGINS=http://localhost:3000,http://localhost:8080
```

### Data Customization
Edit `backend/app/data.py` to customize:
- Project information
- Skills and experience levels
- Contact details
- About section content

### API Testing
Use the interactive documentation at `http://localhost:8000/docs` to:
- Test all endpoints
- View request/response schemas
- Submit sample data

## Next Steps

### Potential Enhancements
1. **Database Integration** - Replace static data with PostgreSQL/SQLite
2. **Email Service** - Integrate with SendGrid/AWS SES for contact forms
3. **Authentication** - Add admin authentication for content management
4. **File Upload** - Add project image upload functionality
5. **Analytics** - Track API usage and contact form submissions
6. **Caching** - Implement Redis caching for better performance

### Deployment
- **Backend**: Deploy to Heroku, Railway, or DigitalOcean
- **Frontend**: Deploy to Vercel, Netlify, or GitHub Pages
- **Database**: PostgreSQL on railway/supabase for production

## Troubleshooting

### Common Issues
1. **CORS Errors**: Check that frontend URL is in `CORS_ORIGINS`
2. **Import Errors**: Ensure all dependencies are installed
3. **Port Conflicts**: Make sure ports 8000 and 8080 are available

### Backend Logs
Contact form submissions are logged to the console for debugging.

## API Response Examples

### Projects Endpoint
```json
{
  "projects": [
    {
      "title": "Análise de Fraude em Cartões de Crédito",
      "description": "Projeto de machine learning...",
      "image": "/placeholder.svg",
      "tags": ["Python", "Scikit-learn", "Pandas"],
      "icon": "Database",
      "links": {
        "live": "#",
        "github": "https://github.com/..."
      }
    }
  ]
}
```

### Contact Submission
```json
{
  "success": true,
  "message": "Mensagem enviada com sucesso!",
  "timestamp": "2024-01-01T12:00:00"
}
```