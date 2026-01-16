# FocusGrow - Vercel Deployment

This application is configured for Vercel deployment.

## Deployment Steps

### 1. Install Vercel CLI (optional, for command-line deployment)
```bash
npm i -g vercel
```

### 2. Deploy to Vercel

#### Option A: Via GitHub (Recommended)
1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect the configuration from `vercel.json`
6. Click "Deploy"

#### Option B: Via Vercel CLI
```bash
vercel
```
Follow the prompts to deploy.

### 3. Environment Configuration
No environment variables are required for basic deployment.

## Important Notes

### Desktop Notifications
- **Local Development**: Desktop notifications work via the Python API (`notifications_api.py`)
- **Vercel Deployment**: Desktop notifications are **not supported** in serverless environments
- **Solution**: The app will automatically fall back to browser notifications in production

### API Endpoints
After deployment, your API will be available at:
- `https://your-app.vercel.app/api/health` - Health check
- `https://your-app.vercel.app/api/notify` - Notification endpoint (graceful fallback)

### Local Development
To run locally:
```bash
# Start the HTTP server
python server.py

# Optionally, start notifications API (in another terminal)
python notifications_api.py
```

Or use the batch files:
```bash
run.bat
```

## File Structure
```
├── api/                    # Vercel serverless functions
│   ├── notify.py          # Notification API (serverless version)
│   └── requirements.txt   # API dependencies
├── images/                # Static assets
├── exports/              # Export directory
├── *.html               # Frontend pages
├── *.js                 # Frontend scripts
├── *.css                # Styles
├── vercel.json          # Vercel configuration
└── requirements.txt     # Local development dependencies
```

## Features Available on Vercel
✅ Full timer functionality
✅ User authentication (localStorage-based)
✅ Statistics and analytics
✅ Garden visualization
✅ Settings management
✅ Browser notifications (when user grants permission)
⚠️ Desktop notifications (not available in serverless, browser notifications used instead)

## Troubleshooting

### If deployment fails:
1. Check that all HTML/JS/CSS files are in the root directory
2. Ensure `vercel.json` is properly formatted
3. Check the Vercel deployment logs for specific errors

### If API doesn't work:
1. Verify the API routes in `vercel.json`
2. Check that `api/notify.py` exists
3. View function logs in Vercel dashboard

## Custom Domain (Optional)
After deployment, you can add a custom domain in the Vercel dashboard:
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
