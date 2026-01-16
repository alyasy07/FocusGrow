# 📚 Study Timer App - High Fidelity Prototype

A mobile-first study timer web application with authentication, navigation, and statistics tracking. Built with vanilla HTML, CSS, and JavaScript.

## ✨ Features

### 🔐 Authentication System
- **Login Page** (`login.html`) - User authentication with demo credentials
- **Register Page** (`register.html`) - New user registration
- **Session Management** - LocalStorage-based authentication
- **Protected Routes** - Auto-redirect to login if not authenticated

### 📱 Main Application
- **Dashboard** (`dashboard.html`) - Main timer interface with personalized welcome
- **Statistics** (`stats.html`) - Comprehensive study statistics and activity history
- **Settings** (`settings.html`) - Customizable timer settings and preferences

### ⏱️ Timer Features
- 25-minute study sessions (customizable)
- 5-minute break sessions (customizable)
- Start, Pause, and Reset controls
- Automatic session tracking
- localStorage data persistence
- Visual feedback and animations

### 📊 Statistics Tracking
- Total study time
- Completed sessions count
- Study streak tracking
- Daily average calculations
- Recent activity history

### ⚙️ Settings & Customization
- Custom study duration (25/30/45/60 minutes)
- Custom break duration (5/10/15 minutes)
- Auto-start breaks toggle
- Sound notifications
- Browser notifications
- Clear data option

### 🎨 UI/UX Features
- **Dark Mode** - Easy on the eyes for long study sessions
- **Mobile-First Design** - Fully responsive on all devices
- **Top Navigation** - Desktop navigation bar
- **Bottom Navigation** - Mobile-friendly bottom nav
- **Smooth Animations** - Subtle transitions and effects
- **High Fidelity** - App-like appearance and feel

## 🚀 Getting Started

### Quick Start with Python

**Option 1: Run with Python Server (Recommended)**
```bash
# Method 1: Use the batch file
run.bat

# Method 2: Run Python directly
python server.py
```
The app will automatically open in your browser at `http://localhost:8080`

**Option 2: Use Laragon/XAMPP**
- Place files in your web server directory
- Access via `http://localhost/timer-app`

**Option 3: Open Directly**
- Simply open `index.html` in your browser
- Note: Some features may require a web server

### Demo Credentials
```
Username: demo
Password: demo
```

### Python Tools Included

**server.py** - Development Server
- Lightweight HTTP server for local development
- Auto-opens browser
- CORS headers for API testing
- No installation required (uses Python standard library)

**data_manager.py** - Data Export & Analytics
- Export study data to JSON/CSV
- Generate progress reports
- Backup and restore functionality
- Usage: `python data_manager.py`

### File Structure
```
timer-app/
├── index.html          # Landing/redirect page
├── login.html          # Login page
├── register.html       # Registration page
├── dashboard.html      # Main timer dashboard
├── garden.html         # Tree shop & forest viewer
├── stats.html          # Statistics page
├── settings.html       # Settings page
├── style.css           # Complete app styles
├── modal.css           # Modal styles
├── messages.css        # Toast notifications
├── garden-buttons.css  # Garden UI styles
├── forest-viewer.css   # Forest display styles
├── confirm-dialog.css  # Custom dialog styles
├── script.js           # Timer & gamification logic
├── garden.js           # Tree shop & forest
├── login.js            # Login functionality
├── register.js         # Registration functionality
├── auth.js             # Authentication management
├── stats.js            # Statistics display
├── settings.js         # Settings management
├── confirm-dialog.js   # Custom confirmation dialogs
├── server.py           # Python development server
├── data_manager.py     # Data export & analytics tool
├── requirements.txt    # Python dependencies
├── run.bat             # Quick launch script
└── images/
    ├── trees/          # 22 tree images
    ├── mockup1.png     # Forest mockup (1-5 trees)
    ├── mockup2.png     # Forest mockup (6-15 trees)
    └── mockup3.png     # Forest mockup (16+ trees)
```

### How to Use

1. **Open the app**: Open `index.html` in your browser (will auto-redirect)

2. **Login**: 
   - Use demo/demo credentials
   - Or create a new account

3. **Start Studying**:
   - Click "Start" to begin a 25-minute session
   - Click "Pause" to pause the timer
   - Click "Reset" to restart the timer

4. **Switch Modes**:
   - Click "Study (25min)" for study sessions
   - Click "Break (5min)" for break time

5. **View Stats**:
   - Navigate to Stats page to see your progress
   - View total time, sessions, streaks, and activity

6. **Customize Settings**:
   - Adjust timer durations
   - Enable/disable notifications
   - Clear your data if needed

## 💾 Data Storage

All data is stored in browser localStorage:
- User authentication status
- Study time and session counts
- Settings and preferences
- User profile information

**Note**: Data persists in your browser but is not synced across devices (this is a client-side only prototype).

## 📱 Navigation

### Desktop (Top Nav Bar)
- Timer - Main dashboard with timer
- Stats - View your statistics
- Settings - Customize your experience
- Logout - Sign out of the app

### Mobile (Bottom Nav Bar)
- Automatically switches to bottom navigation on mobile devices
- Same functionality as desktop navigation
- Optimized for thumb-friendly interaction

## 🎯 Key Technologies

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **Vanilla JavaScript** - No frameworks
- **LocalStorage API** - Data persistence
- **Responsive Design** - Mobile-first approach
- **Python 3.7+** - Development server & data tools
- **Font Awesome 6.5.1** - Icon library
- **Animate.css 4.1.1** - Animation library

## 🐍 Python Scripts

### server.py - Development Server
```bash
python server.py
```
Features:
- Serves app on `http://localhost:8080`
- Auto-opens browser
- CORS headers for development
- Clean logging with timestamps
- Press Ctrl+C to stop

### data_manager.py - Data Management
```bash
python data_manager.py
```
Features:
- Export data to JSON format
- Export statistics to CSV
- Generate text-based progress reports
- Backup and restore user data
- Compatible with localStorage format

Example: Export your data
```python
from data_manager import FocusGrowDataManager

manager = FocusGrowDataManager()
user_data = {
    "totalStudyTime": 1250,
    "sessionsCompleted": 42,
    "totalXP": 2400,
    "coins": 850,
    "treesGrown": 25
}

manager.export_to_json(user_data)
manager.export_to_csv(user_data)
manager.print_report(user_data)
```

## 🔧 Customization

### Changing Timer Defaults
Edit `script.js`:
```javascript
const STUDY_DURATION = 1500; // 25 minutes in seconds
const BREAK_DURATION = 300;  // 5 minutes in seconds
```

### Modifying Colors
Edit `style.css` color variables:
- Primary: `#8b5cf6` (Purple)
- Background: `#1e1e2e` (Dark)
- Card Background: `#252538` (Dark Gray)
- Text: `#e0e0e0` (Light Gray)

## 📝 Notes

- This is a high-fidelity prototype for demonstration purposes
- In a production app, authentication would be handled server-side
- Consider adding backend API for real user management
- Data is stored locally and not synced across devices
- No actual backend or database is used

## 🎨 Design Philosophy

- **Minimal & Clean** - Distraction-free interface
- **Dark Mode** - Reduced eye strain
- **Smooth Animations** - Subtle, non-distracting
- **Mobile-First** - Works great on all devices
- **Intuitive Navigation** - Easy to use and understand

## 🚀 Future Enhancements

- [ ] Backend API integration
- [ ] Cloud data sync
- [ ] Social features (study groups)
- [ ] Pomodoro technique variations
- [ ] Progress charts and graphs
- [ ] Study goals and achievements
- [ ] Calendar integration
- [ ] Focus music integration

---

Built with ❤️ for productive studying
