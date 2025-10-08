# 🚀 Rafael Lopes - Portfolio Website

> A modern, full-stack portfolio website showcasing my web development expertise and projects.

**Live Demo**: [View Portfolio](https://your-portfolio-url.railway.app) | **API Docs**: [FastAPI Documentation](https://your-portfolio-url.railway.app/docs)

![Portfolio Preview](./src/assets/top11.png)

## 💼 About This Project

This portfolio website demonstrates my proficiency in modern web development technologies, featuring a full-stack architecture with responsive design, API integration, and production-ready deployment. Built to showcase both frontend aesthetics and backend functionality.

## 🛠️ Tech Stack & Skills Demonstrated

### Frontend Development
- **⚛️ React 18** - Modern functional components with hooks
- **🎨 TypeScript** - Type-safe development with strict typing
- **💨 Vite** - Lightning-fast build tool and development server
- **🎭 Tailwind CSS** - Utility-first CSS framework for responsive design
- **🧩 shadcn/ui** - High-quality, accessible component library
- **📱 Responsive Design** - Mobile-first approach with modern CSS techniques

### Backend Development
- **🐍 Python 3.11** - Modern Python with FastAPI framework
- **🚀 FastAPI** - High-performance async API with automatic documentation
- **📝 Pydantic** - Data validation and serialization with type hints
- **🔧 Uvicorn** - ASGI server for production-ready performance
- **🌐 CORS** - Cross-origin resource sharing configuration

### Development & Deployment
- **🐳 Docker** - Multi-stage containerization for optimized builds
- **🚂 Railway** - Cloud deployment with automatic CI/CD
- **📦 npm/Node.js** - Package management and build processes
- **🔄 Git** - Version control with clean commit history
- **⚙️ Environment Management** - Secure configuration handling

### Architecture & Best Practices
- **🏗️ Full-Stack Integration** - Seamless frontend-backend communication
- **📊 RESTful API Design** - Well-structured endpoints with proper HTTP methods
- **🔒 Security** - Environment variable protection and CORS configuration
- **📈 Performance** - Optimized builds and efficient static file serving
- **🧪 Type Safety** - End-to-end TypeScript for robust development

## 🌟 Key Features

### 🎯 Professional Portfolio Sections
- **Hero Section** - Dynamic introduction with call-to-action
- **About Me** - Professional background and expertise
- **Skills Display** - Interactive showcase of technical abilities
- **Project Gallery** - Featured work with live demos and GitHub links
- **Contact Form** - Functional contact system with backend integration

### 🔧 Technical Highlights
- **Smooth Scrolling Navigation** - Fixed navbar with offset-aware scrolling
- **Responsive Grid Layouts** - CSS Grid and Flexbox mastery
- **API Integration** - Real-time data fetching and form submissions
- **Component Architecture** - Reusable, maintainable React components
- **Type-Safe Development** - Full TypeScript implementation

### 🚀 Production Features
- **Health Monitoring** - API health checks for uptime monitoring
- **Static File Serving** - Efficient frontend delivery through FastAPI
- **Environment Configuration** - Development/production environment handling
- **Docker Optimization** - Multi-stage builds for minimal image size

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+ and npm
- Python 3.11+
- Git

### Development Setup

```bash
# Clone the repository
git clone https://github.com/RafaelLopesPinheiro/My-landpage-main.git
cd My-landpage-main

# Install frontend dependencies
npm install

# Start frontend development server
npm run dev

# In a new terminal, start backend server
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

### 🌐 Access Points
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs
- **Health Check**: http://localhost:8000/health

## 📁 Project Structure

```
├── src/                    # React frontend source
│   ├── components/         # Reusable UI components
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   └── assets/            # Images and static files
├── backend/               # Python FastAPI backend
│   └── app/               # Application code
│       ├── main.py        # FastAPI application
│       ├── routers/       # API route handlers
│       └── schemas.py     # Pydantic data models
├── Dockerfile             # Multi-stage production build
├── railway.toml          # Railway deployment configuration
└── package.json          # Frontend dependencies and scripts
```

## 🚀 Deployment

This project is configured for seamless deployment on Railway with Docker:

```bash
# Deploy to Railway
railway login
railway link
railway up
```

The application uses a multi-stage Docker build that:
1. Builds the React frontend with Vite
2. Sets up Python backend with FastAPI
3. Serves frontend static files through the backend
4. Includes health monitoring and environment configuration

## 🔗 API Endpoints

- `GET /` - Serve React application
- `GET /health` - Application health check
- `GET /api/*` - API routes (extensible for future features)
- `GET /docs` - Interactive API documentation

## 🎨 Design Philosophy

This portfolio emphasizes:
- **Clean, Modern UI** - Professional aesthetic with attention to detail
- **Performance First** - Optimized loading and smooth interactions
- **Accessibility** - Semantic HTML and ARIA compliance
- **Scalability** - Modular architecture for easy feature additions

## 👨‍💻 Developer

**Rafael Lopes** - Full-Stack Developer

Passionate about creating efficient, scalable web applications with modern technologies. This portfolio demonstrates my expertise in both frontend aesthetics and backend architecture.

---

*This project showcases modern web development practices including React, TypeScript, FastAPI, Docker, and cloud deployment. It represents my ability to deliver complete, production-ready applications from concept to deployment.*
