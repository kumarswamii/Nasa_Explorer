# Vercel Deployment Instructions

## Prerequisites
1. Get a NASA API key from https://api.nasa.gov/
2. Install Vercel CLI: `npm i -g vercel`
3. Have a Vercel account

## Deployment Steps

### 1. Environment Variables
Set up your NASA API key in Vercel:
```bash
vercel env add NASA_API_KEY
```
When prompted, enter your NASA API key.

### 2. Deploy
```bash
# From the project root directory
vercel

# For production deployment
vercel --prod
```

### 3. Domain Configuration
After deployment, your app will be available at:
- `https://your-project-name.vercel.app`

## Environment Variables in Vercel Dashboard
You can also set environment variables through the Vercel dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add `NASA_API_KEY` with your API key value

## Local Development
For local development, create a `.env` file in the root directory:
```
NASA_API_KEY=your_nasa_api_key_here
```

## Vercel Configuration
The `vercel.json` file configures:
- Static build for React frontend
- Serverless functions for API endpoints
- Routing between frontend and API
- Environment variables
- Function timeouts
