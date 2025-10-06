# Railway Deployment Guide

## 🚀 Quick Deploy to Railway

### Prerequisites
1. GitHub account with your code pushed
2. Railway account (sign up at railway.app)

### Deployment Steps

1. **Connect to Railway**
   - Go to [railway.app](https://railway.app)
   - Sign in with GitHub
   - Click "Deploy from GitHub repo"
   - Select your repository

2. **Railway Auto-Detection**
   - Railway will automatically detect the Dockerfile
   - It will build both frontend and backend together
   - No additional configuration needed!

3. **Environment Variables (Optional)**
   - In Railway dashboard, go to your service
   - Click "Variables" tab
   - Add if needed:
     ```
     ENVIRONMENT=production
     CORS_ORIGINS=https://your-app.railway.app
     ```

4. **Custom Domain (Optional)**
   - In Railway dashboard, go to "Domains"
   - Add your custom domain
   - Update CORS_ORIGINS to include your domain

### 🔧 What This Deployment Includes

- ✅ **Full-Stack App**: Frontend + Backend in one service
- ✅ **React Frontend**: Served from `/` (root)
- ✅ **FastAPI Backend**: Available at `/api/*`
- ✅ **Health Check**: Available at `/health`
- ✅ **Auto-Deploy**: Pushes to main branch auto-deploy
- ✅ **HTTPS**: Automatic SSL certificate
- ✅ **Custom Domain**: Support for your own domain

### 📱 Access Your App

After deployment:
- **Main URL**: `https://your-app.railway.app`
- **API Docs**: `https://your-app.railway.app/docs`
- **Health Check**: `https://your-app.railway.app/health`

### 🐛 Troubleshooting

**Build Fails?**
- Check Railway build logs
- Ensure all dependencies are in package.json and requirements.txt

**API Not Working?**
- Check `/health` endpoint
- Verify environment variables in Railway dashboard

**Frontend Not Loading?**
- Check if build completed successfully
- Verify static files are in `/static` directory

### 🔄 Updates

To update your deployed app:
1. Push changes to your main branch
2. Railway automatically rebuilds and deploys
3. Check deployment status in Railway dashboard

### 💡 Pro Tips

- Use Railway's **environment variables** for sensitive data
- Monitor your app with Railway's **metrics dashboard**
- Set up **custom domains** for production
- Use Railway's **database addon** if you need persistent storage

## 🎯 Production Checklist

Before going live:
- [ ] Update CORS_ORIGINS with your production domain
- [ ] Test all API endpoints work
- [ ] Verify contact form submission
- [ ] Check responsive design on mobile
- [ ] Test navigation and routing
- [ ] Ensure all external links work
- [ ] Add analytics (Google Analytics, etc.)
- [ ] Set up monitoring/alerts