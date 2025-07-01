# NASA Space Data Explorer 🚀

A full-stack web application that showcases NASA's space data through their public APIs. Built with React frontend and deployed as serverless functions on Vercel.

## 🌟 Features

- **Astronomy Picture of the Day (APOD)**: View NASA's daily featured space images
- **Mars Rover Photos**: Browse photos taken by NASA's Mars rovers (Curiosity, Perseverance)
- **Near Earth Objects**: Explore asteroid data and orbital information
- **Earth Imagery**: Satellite imagery of Earth from space
- **Rovers Information**: Get data about Mars rovers and their missions
- **Interactive Controls**: Select dates, rovers, and other parameters
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Real-time Data**: Fetches live data from NASA's APIs
- **Error Handling**: Graceful error handling with retry functionality
- **Loading States**: Visual feedback during data fetching

## 🛠️ Technology Stack

### Frontend
- **React 18**: Modern React with functional components and hooks
- **Axios**: HTTP client for API requests
- **CSS3**: Custom styling with gradients and animations
- **Responsive Design**: Mobile-first approach

### Backend (Serverless)
- **Vercel Serverless Functions**: Scalable API endpoints
- **Node.js**: JavaScript runtime
- **Axios**: HTTP client for NASA API requests
- **Environment Variables**: Secure configuration management

### Deployment
- **Vercel**: Full-stack deployment platform
- **Serverless Architecture**: Auto-scaling, zero-maintenance
- **Global CDN**: Fast loading worldwide
- **Automatic SSL**: Secure HTTPS by default

## 📋 Prerequisites

Before running this application, make sure you have:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **NASA API Key** (free from https://api.nasa.gov/)
- **Vercel Account** (free at https://vercel.com/)

## 🚀 Quick Start

### Option 1: View Live Demo
Visit the deployed application: **[NASA Space Explorer](https://nasa-explorer-test.vercel.app)**

### Option 2: Local Development

#### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd nasa-space-explorer
```

#### 2. Install Dependencies
```bash
# Install all dependencies (frontend, backend, and API)
npm run install-all

# Or install individually:
# Frontend dependencies
cd frontend && npm install

# API dependencies  
cd ../api && npm install

# Backend dependencies (for reference)
cd ../backend && npm install
```

#### 3. Set Up Environment Variables
```bash
# Create .env file in the root directory
cp .env.example .env

# Edit .env and add your NASA API key
NASA_API_KEY=your_actual_nasa_api_key_here
```

#### 4. Run the Application Locally
```bash
# From the root directory, run both frontend and backend
npm run dev

# Or run individually:
# Backend (runs on http://localhost:5000)
npm run server

# Frontend (runs on http://localhost:3000)
npm run client
```

#### 5. Access the Local Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Health Check: http://localhost:5000/health

## 🌐 Deployment (Vercel)

### Prerequisites for Deployment
1. **Vercel CLI**: Install globally with `npm install -g vercel`
2. **NASA API Key**: Get your free key from https://api.nasa.gov/
3. **Vercel Account**: Sign up at https://vercel.com/

### Deployment Steps

#### 1. Login to Vercel
```bash
vercel login
```

#### 2. Deploy the Application
```bash
# From the project root directory
vercel --prod
```

#### 3. Set Environment Variables
```bash
# Add NASA API key for all environments
vercel env add NASA_API_KEY production
vercel env add NASA_API_KEY preview  
vercel env add NASA_API_KEY development
```

#### 4. Access Your Deployed App
Your app will be available at: `https://your-project-name.vercel.app`

## 🔧 Project Architecture

### Project Structure
```
nasa-space-explorer/
├── api/                     # Serverless API functions (Vercel)
│   ├── apod.js             # Astronomy Picture of the Day endpoint
│   ├── mars-photos.js      # Mars Rover Photos endpoint
│   ├── neo.js              # Near Earth Objects endpoint
│   ├── earth-imagery.js    # Earth Imagery endpoint
│   ├── rovers.js           # Rovers Information endpoint
│   ├── health.js           # Health check endpoint
│   ├── _lib/
│   │   └── nasaService.js  # Shared NASA API service
│   └── package.json        # API dependencies
├── frontend/               # React application
│   ├── public/
│   │   └── index.html      # HTML template
│   ├── src/
│   │   ├── App.js          # Main React component
│   │   ├── App.css         # Styling
│   │   ├── index.js        # React entry point
│   │   └── index.css       # Global styles
│   └── package.json        # Frontend dependencies
├── backend/                # Original Express server (reference)
│   ├── src/
│   │   ├── server.js       # Express server setup
│   │   ├── routes.js       # API routes
│   │   └── nasaService.js  # NASA API integration
│   └── package.json        # Backend dependencies
├── vercel.json             # Vercel deployment configuration
├── package.json            # Root package.json for scripts
├── .env.example            # Environment variables template
├── VERCEL_DEPLOYMENT.md    # Deployment instructions
├── README.md               # This file
└── .gitignore             # Git ignore rules
```

### Serverless Architecture (Vercel)

The application uses **Vercel's serverless functions** for the backend API:

1. **Individual Function Files**: Each API endpoint is a separate serverless function
2. **Shared Service Layer**: Common NASA API logic in `_lib/nasaService.js`
3. **Auto-scaling**: Functions scale automatically based on demand
4. **Global Distribution**: Functions run close to users worldwide
5. **Zero Maintenance**: No server management required

### Key React Concepts Used

1. **Functional Components**: Modern React approach using functions instead of classes
2. **React Hooks**:
   - `useState`: Managing component state
   - `useEffect`: Side effects and lifecycle methods
3. **Props**: Passing data between components
4. **Event Handling**: User interactions (button clicks, form inputs)
5. **Conditional Rendering**: Showing/hiding components based on state
6. **API Integration**: Fetching data from serverless API endpoints

### Backend Architecture (Serverless)

1. **Serverless Functions**: Each API endpoint as an individual function
2. **Service Layer**: NASA API integration with error handling
3. **CORS Configuration**: Proper cross-origin resource sharing
4. **Error Handling**: Comprehensive error management
5. **Environment Variables**: Secure API key management

## 📚 API Endpoints

### Serverless API Routes (Vercel Functions)

- `GET /api/apod?date=YYYY-MM-DD` - Astronomy Picture of the Day
- `GET /api/mars-photos?rover=curiosity&sol=1000&camera=fhaz` - Mars Rover Photos
- `GET /api/neo?start_date=YYYY-MM-DD&end_date=YYYY-MM-DD` - Near Earth Objects
- `GET /api/earth-imagery?lat=29.78&lon=-95.33&date=2018-01-01` - Earth Imagery
- `GET /api/rovers` - Mars Rovers Information
- `GET /api/health` - Health check endpoint

### NASA APIs Used

1. **APOD API**: Astronomy Picture of the Day
2. **Mars Rover Photos API**: Images from Mars rovers (Curiosity, Perseverance)
3. **Near Earth Object API**: Asteroid and comet data
4. **Earth Imagery API**: Landsat satellite imagery
5. **Mars Rover Manifest API**: Rover mission information

## 🎨 Features Explanation

### For Interview Presentation

**React Concepts Demonstrated:**
- **State Management**: Using `useState` to manage application data
- **Effect Hooks**: Using `useEffect` for component lifecycle
- **Component Architecture**: Breaking down UI into reusable components
- **Props Passing**: Parent-child component communication
- **Event Handling**: Form submissions and button clicks
- **API Integration**: Fetching data from backend API
- **Error Handling**: Managing loading and error states
- **Responsive Design**: Mobile-friendly CSS

**Node.js/Serverless Concepts:**
- **Serverless Functions**: Individual API endpoints as functions
- **Service Architecture**: Separating business logic from handlers
- **Error Handling**: Comprehensive error management with proper HTTP codes
- **Environment Configuration**: Secure credential management
- **CORS Handling**: Cross-origin resource sharing for web APIs
- **HTTP Methods**: RESTful API design principles

## 🚀 Deployment & Production

### Live Application
- **Production URL**: [https://nasa-explorer-test.vercel.app](https://nasa-explorer-test.vercel.app)
- **Platform**: Vercel (Serverless)
- **Environment**: Production-ready with SSL

### Deployment Features:
- ✅ **Auto-scaling**: Functions scale based on demand
- ✅ **Global CDN**: Fast loading worldwide
- ✅ **Automatic SSL**: Secure HTTPS by default
- ✅ **Environment Variables**: Secure API key management
- ✅ **Preview Deployments**: Every branch gets a preview URL
- ✅ **Zero Downtime**: Atomic deployments

### Configuration Files:
- **vercel.json**: Deployment configuration and build settings
- **.env.example**: Environment variables template
- **VERCEL_DEPLOYMENT.md**: Detailed deployment instructions

## 🔍 Testing the Application

### Live Testing:
Visit [https://nasa-explorer-test.vercel.app](https://nasa-explorer-test.vercel.app) to test all features

### Local Testing Steps:
1. **APOD Feature**: Select different dates and verify images load
2. **Mars Photos**: Try different rovers (Curiosity, Perseverance) and sol numbers
3. **Error Handling**: Test with invalid inputs to see error messages
4. **Responsive Design**: Test on different screen sizes and devices
5. **Loading States**: Verify loading indicators appear during API calls

### API Testing:
```bash
# Test serverless API endpoints directly
curl https://nasa-explorer-test.vercel.app/api/health
curl https://nasa-explorer-test.vercel.app/api/apod
curl "https://nasa-explorer-test.vercel.app/api/mars-photos?rover=curiosity&sol=1000"
curl "https://nasa-explorer-test.vercel.app/api/neo?start_date=2023-01-01&end_date=2023-01-07"

# Test locally (if running local development)
curl http://localhost:3000/api/health
curl http://localhost:3000/api/apod
```

## 🎯 Interview Talking Points

### Technical Decisions:
1. **Why React?** Modern, component-based, excellent ecosystem
2. **Why Serverless?** Auto-scaling, zero maintenance, cost-effective
3. **Why Vercel?** Excellent developer experience, global CDN, easy deployment
4. **State Management**: Used built-in hooks for simplicity over complex state libraries
5. **API Design**: RESTful principles with clear, intuitive endpoints
6. **Error Handling**: User-friendly error messages with proper HTTP status codes
7. **Security**: CORS properly configured, environment variables for API keys

### Architecture Benefits:
- **Scalability**: Serverless functions auto-scale with demand
- **Performance**: Global CDN ensures fast loading worldwide
- **Reliability**: No single point of failure, built-in redundancy
- **Cost-Effective**: Pay only for actual usage
- **Developer Experience**: Easy deployment and monitoring

### Possible Improvements:
- Add caching for better performance and reduced API calls
- Implement user authentication and favorites
- Add more NASA API endpoints (Exoplanets, Solar System data)
- Include unit and integration tests
- Add data visualization charts and graphs
- Implement offline functionality with service workers
- Add search and filtering capabilities
- Include accessibility improvements (ARIA labels, keyboard navigation)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly (both locally and in production)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Submit a pull request

## 📚 Additional Resources

- **Live Demo**: [https://nasa-explorer-test.vercel.app](https://nasa-explorer-test.vercel.app)
- **NASA API Documentation**: [https://api.nasa.gov/](https://api.nasa.gov/)
- **Vercel Documentation**: [https://vercel.com/docs](https://vercel.com/docs)
- **React Documentation**: [https://react.dev/](https://react.dev/)
- **Deployment Guide**: See `VERCEL_DEPLOYMENT.md` for detailed instructions

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- NASA for providing free access to their amazing APIs
- Vercel for the excellent serverless platform
- React and Node.js communities for outstanding documentation
- All contributors to open-source libraries used in this project

---

**Built with ❤️ for space exploration and modern web development**

*Deployed on Vercel - Experience the universe through NASA's data!*
