// ====== Duration Constants ======
const STUDY_DURATION = 1500;  // 25 minutes
const SHORT_BREAK = 300;      // 5 minutes
const LONG_BREAK = 900;       // 15 minutes

// ====== Gamification Constants ======
const XP_PER_SESSION = 25;
const COINS_PER_SESSION = 10;
const XP_PER_LEVEL = 100;

// ====== Tree Types ======
const TREES = {
    oak: {
        name: "Oak Tree",
        stages: 4,
        owned: true,
        unlockLevel: 0,
        cost: 0,
        colors: { primary: "#10b981", secondary: "#059669", accent: "#34d399" },
        description: "Classic and sturdy",
        image: "images/trees/oak.png"
    },
    sakura: {
        name: "Cherry Blossom",
        stages: 4,
        owned: false,
        unlockLevel: 2,
        cost: 50,
        colors: { primary: "#ec4899", secondary: "#db2777", accent: "#f9a8d4" },
        description: "Beautiful pink petals",
        image: "images/trees/sakura.png"
    },
    pine: {
        name: "Pine Tree",
        stages: 4,
        owned: false,
        unlockLevel: 3,
        cost: 75,
        colors: { primary: "#14b8a6", secondary: "#0d9488", accent: "#5eead4" },
        description: "Evergreen wisdom",
        image: "images/trees/pine.png"
    },
    birch: {
        name: "Birch Tree",
        stages: 4,
        owned: false,
        unlockLevel: 4,
        cost: 100,
        colors: { primary: "#f0f0f0", secondary: "#d4d4d4", accent: "#ffffff" },
        description: "Elegant white bark",
        image: "images/trees/birch.png"
    },
    maple: {
        name: "Maple Tree",
        stages: 4,
        owned: false,
        unlockLevel: 5,
        cost: 125,
        colors: { primary: "#f97316", secondary: "#ea580c", accent: "#fb923c" },
        description: "Autumn colors",
        image: "images/trees/maple.png"
    },
    willow: {
        name: "Willow Tree",
        stages: 4,
        owned: false,
        unlockLevel: 6,
        cost: 150,
        colors: { primary: "#84cc16", secondary: "#65a30d", accent: "#a3e635" },
        description: "Peaceful and flowing",
        image: "images/trees/willow.png"
    },
    spruce: {
        name: "Spruce Tree",
        stages: 4,
        owned: false,
        unlockLevel: 7,
        cost: 175,
        colors: { primary: "#059669", secondary: "#047857", accent: "#10b981" },
        description: "Tall and majestic",
        image: "images/trees/spruce.png"
    },
    apple: {
        name: "Apple Tree",
        stages: 4,
        owned: false,
        unlockLevel: 8,
        cost: 200,
        colors: { primary: "#ef4444", secondary: "#dc2626", accent: "#f87171" },
        description: "Fruitful harvest",
        image: "images/trees/apple.png"
    },
    palm: {
        name: "Palm Tree",
        stages: 4,
        owned: false,
        unlockLevel: 9,
        cost: 225,
        colors: { primary: "#f59e0b", secondary: "#d97706", accent: "#fbbf24" },
        description: "Tropical paradise",
        image: "images/trees/palm.png"
    },
    cedar: {
        name: "Cedar Tree",
        stages: 4,
        owned: false,
        unlockLevel: 10,
        cost: 250,
        colors: { primary: "#78350f", secondary: "#92400e", accent: "#a16207" },
        description: "Ancient strength",
        image: "images/trees/cedar.png"
    },
    beech: {
        name: "Beech Tree",
        stages: 4,
        owned: false,
        unlockLevel: 11,
        cost: 275,
        colors: { primary: "#a3e635", secondary: "#84cc16", accent: "#bef264" },
        description: "Smooth and graceful",
        image: "images/trees/beech.png"
    },
    cypress: {
        name: "Cypress Tree",
        stages: 4,
        owned: false,
        unlockLevel: 12,
        cost: 300,
        colors: { primary: "#0d9488", secondary: "#0f766e", accent: "#14b8a6" },
        description: "Symbol of eternity",
        image: "images/trees/cypress.png"
    },
    linden: {
        name: "Linden Tree",
        stages: 4,
        owned: false,
        unlockLevel: 13,
        cost: 325,
        colors: { primary: "#65a30d", secondary: "#4d7c0f", accent: "#84cc16" },
        description: "Heart-shaped leaves",
        image: "images/trees/linden.png"
    },
    poplar: {
        name: "Poplar Tree",
        stages: 4,
        owned: false,
        unlockLevel: 14,
        cost: 350,
        colors: { primary: "#22c55e", secondary: "#16a34a", accent: "#4ade80" },
        description: "Fast growing",
        image: "images/trees/poplar.png"
    },
    coffee: {
        name: "Coffee Tree",
        stages: 4,
        owned: false,
        unlockLevel: 15,
        cost: 400,
        colors: { primary: "#78350f", secondary: "#451a03", accent: "#92400e" },
        description: "Energizing beans",
        image: "images/trees/coffee tree.png"
    },
    limon: {
        name: "Lemon Tree",
        stages: 4,
        owned: false,
        unlockLevel: 16,
        cost: 450,
        colors: { primary: "#facc15", secondary: "#eab308", accent: "#fde047" },
        description: "Citrus freshness",
        image: "images/trees/limon.png"
    },
    ashberry: {
        name: "Ashberry Tree",
        stages: 4,
        owned: false,
        unlockLevel: 17,
        cost: 500,
        colors: { primary: "#dc2626", secondary: "#b91c1c", accent: "#ef4444" },
        description: "Vibrant red berries",
        image: "images/trees/ashberry.png"
    },
    coconut: {
        name: "Coconut Palm",
        stages: 4,
        owned: false,
        unlockLevel: 18,
        cost: 550,
        colors: { primary: "#0ea5e9", secondary: "#0284c7", accent: "#38bdf8" },
        description: "Island vibes",
        image: "images/trees/coconut palm.png"
    },
    mangrove: {
        name: "Mangrove Tree",
        stages: 4,
        owned: false,
        unlockLevel: 19,
        cost: 600,
        colors: { primary: "#047857", secondary: "#065f46", accent: "#059669" },
        description: "Coastal guardian",
        image: "images/trees/mangrove.png"
    },
    seabuckthorn: {
        name: "Sea Buckthorn",
        stages: 4,
        owned: false,
        unlockLevel: 20,
        cost: 650,
        colors: { primary: "#fb923c", secondary: "#f97316", accent: "#fdba74" },
        description: "Hardy survivor",
        image: "images/trees/sea-buckthorn.png"
    },
    baobab: {
        name: "Baobab Tree",
        stages: 4,
        owned: false,
        unlockLevel: 22,
        cost: 750,
        colors: { primary: "#a16207", secondary: "#854d0e", accent: "#ca8a04" },
        description: "Tree of life",
        image: "images/trees/baobab.png"
    },
    dead: {
        name: "Dead Tree",
        stages: 4,
        owned: false,
        unlockLevel: 25,
        cost: 1000,
        colors: { primary: "#737373", secondary: "#525252", accent: "#a3a3a3" },
        description: "Spooky aesthetic",
        image: "images/trees/dead tree.png"
    }
};

// ====== Motivational Quotes ======
const quotes = [
    "Plant the seed of focus, grow the tree of success.",
    "Every great achievement starts with a single focused moment.",
    "Your focus determines your reality.",
    "Small steps every day lead to big results.",
    "The secret of getting ahead is getting started.",
    "Focus on progress, not perfection.",
    "Your future is created by what you do today.",
    "Believe you can and you're halfway there.",
    "The only way to do great work is to love what you do.",
    "Dreams don't work unless you do."
];

// ====== Level Titles ======
const levelTitles = [
    "Seedling", "Sprout", "Sapling", "Growing Tree", "Young Tree",
    "Mature Tree", "Forest Guardian", "Nature Master", "Eco Warrior", "Legend"
];

// ====== Timer State ======
const state = {
    timerDuration: STUDY_DURATION,
    timeRemaining: STUDY_DURATION,
    timerInterval: null,
    isRunning: false,
    mode: 'study', // 'study', 'shortBreak', 'longBreak'
    treeStage: 0,  // 0: seed, 1: sprout, 2: small, 3: full
    sessionsToday: 0,
    activeTree: 'oak'
};

// ====== DOM Elements ======
const elements = {
    timerDisplay: document.getElementById('timerDisplay'),
    timerType: document.getElementById('timerType'),
    startBtn: document.getElementById('startBtn'),
    pauseBtn: document.getElementById('pauseBtn'),
    resetBtn: document.getElementById('resetBtn'),
    studyModeBtn: document.getElementById('studyModeBtn'),
    shortBreakBtn: document.getElementById('shortBreakBtn'),
    longBreakBtn: document.getElementById('longBreakBtn'),
    progressRing: document.getElementById('progressRing'),
    // Gamification
    currentLevel: document.getElementById('currentLevel'),
    levelNum: document.getElementById('levelNum'),
    xpFill: document.getElementById('xpFill'),
    currentXP: document.getElementById('currentXP'),
    nextLevelXP: document.getElementById('nextLevelXP'),
    coinsCount: document.getElementById('coinsCount'),
    // Stats
    todaySessions: document.getElementById('todaySessions'),
    treesGrown: document.getElementById('treesGrown'),
    totalHours: document.getElementById('totalHours'),
    streakDays: document.getElementById('streakDays'),
    // Tree stages
    treeSeed: document.getElementById('treeSeed'),
    treeSprout: document.getElementById('treeSprout'),
    treeSmall: document.getElementById('treeSmall'),
    treeFull: document.getElementById('treeFull'),
    // Pet
    pet: document.getElementById('pet'),
    petStatus: document.getElementById('petStatus'),
    // Quote
    motivationQuote: document.getElementById('motivationQuote'),
    // Achievement
    achievementToast: document.getElementById('achievementToast'),
    achievementName: document.getElementById('achievementName')
};

// ====== Initialize Particles ======
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// ====== LocalStorage Functions ======
function getStorageData(key, defaultValue = 0) {
    const value = localStorage.getItem(key);
    if (value === null) return defaultValue;
    return typeof defaultValue === 'number' ? parseInt(value) : value;
}

function setStorageData(key, value) {
    localStorage.setItem(key, value);
}

// ====== Tree Functions ======
function getActiveTree() {
    return localStorage.getItem('activeTree') || 'oak';
}

function setActiveTree(treeKey) {
    localStorage.setItem('activeTree', treeKey);
    state.activeTree = treeKey;
    // Reset tree display if timer not running
    if (!state.isRunning && state.mode === 'study') {
        updateTreeStage(0);
    }
}

function getOwnedTrees() {
    const owned = localStorage.getItem('ownedTrees');
    return owned ? JSON.parse(owned) : ['oak'];
}

function purchaseTree(treeKey) {
    const tree = TREES[treeKey];
    const coins = getStorageData('coins', 0);
    const level = calculateLevel(getStorageData('totalXP', 0));
    
    // Check if already owned
    const ownedTrees = getOwnedTrees();
    if (ownedTrees.includes(treeKey)) {
        return { success: false, message: 'Already owned!' };
    }
    
    // Check level requirement
    if (level < tree.unlockLevel) {
        return { success: false, message: `Unlock at level ${tree.unlockLevel}` };
    }
    
    // Check coins
    if (coins < tree.cost) {
        return { success: false, message: `Need ${tree.cost} coins` };
    }
    
    // Purchase successful
    const newCoins = coins - tree.cost;
    setStorageData('coins', newCoins);
    
    ownedTrees.push(treeKey);
    localStorage.setItem('ownedTrees', JSON.stringify(ownedTrees));
    
    return { success: true, message: `${tree.name} unlocked!` };
}

function isTreeOwned(treeKey) {
    return getOwnedTrees().includes(treeKey);
}

// ====== Gamification Functions ======
function calculateLevel(xp) {
    return Math.floor(xp / XP_PER_LEVEL) + 1;
}

function getLevelTitle(level) {
    const index = Math.min(level - 1, levelTitles.length - 1);
    return levelTitles[index];
}

function updateLevelDisplay() {
    const totalXP = getStorageData('totalXP', 0);
    const level = calculateLevel(totalXP);
    const xpInCurrentLevel = totalXP % XP_PER_LEVEL;
    const xpProgress = (xpInCurrentLevel / XP_PER_LEVEL) * 100;
    
    if (elements.currentLevel) elements.currentLevel.textContent = level;
    if (elements.levelNum) elements.levelNum.textContent = level;
    if (elements.xpFill) elements.xpFill.style.width = xpProgress + '%';
    if (elements.currentXP) elements.currentXP.textContent = xpInCurrentLevel;
    if (elements.nextLevelXP) elements.nextLevelXP.textContent = XP_PER_LEVEL;
    
    // Update level title
    const levelTitle = document.querySelector('.level-title');
    if (levelTitle) {
        levelTitle.textContent = `Level ${level} - ${getLevelTitle(level)}`;
    }
}

function updateCoinsDisplay() {
    const coins = getStorageData('coins', 0);
    if (elements.coinsCount) elements.coinsCount.textContent = coins;
}

function addXPAndCoins() {
    let totalXP = getStorageData('totalXP', 0);
    let coins = getStorageData('coins', 0);
    const oldLevel = calculateLevel(totalXP);
    
    totalXP += XP_PER_SESSION;
    coins += COINS_PER_SESSION;
    
    setStorageData('totalXP', totalXP);
    setStorageData('coins', coins);
    
    const newLevel = calculateLevel(totalXP);
    
    updateLevelDisplay();
    updateCoinsDisplay();
    
    // Level up notification
    if (newLevel > oldLevel) {
        showAchievement(`Level ${newLevel} Reached!`);
    }
}

// ====== Tree Growth Functions ======
function updateTreeStage(progress) {
    if (!elements.treeSeed) return;
    
    // Get active tree
    const treeKey = getActiveTree();
    const tree = TREES[treeKey];
    
    // Apply tree colors
    applyTreeColors(tree.colors);
    
    // Hide all stages first
    elements.treeSeed.classList.add('hidden');
    elements.treeSprout.classList.add('hidden');
    elements.treeSmall.classList.add('hidden');
    elements.treeFull.classList.add('hidden');
    
    // Show appropriate stage based on progress
    if (progress < 25) {
        elements.treeSeed.classList.remove('hidden');
        state.treeStage = 0;
    } else if (progress < 50) {
        elements.treeSprout.classList.remove('hidden');
        state.treeStage = 1;
    } else if (progress < 75) {
        elements.treeSmall.classList.remove('hidden');
        state.treeStage = 2;
    } else {
        elements.treeFull.classList.remove('hidden');
        state.treeStage = 3;
    }
}

function applyTreeColors(colors) {
    // Update CSS custom properties for tree colors
    const root = document.documentElement;
    root.style.setProperty('--tree-primary', colors.primary);
    root.style.setProperty('--tree-secondary', colors.secondary);
    root.style.setProperty('--tree-accent', colors.accent);
}

function growTreeComplete() {
    let trees = getStorageData('treesGrown', 0);
    
    // Cap at 25 trees maximum
    if (trees >= 25) {
        console.log('🌳 Maximum trees reached (25/25)');
        showAchievement('Forest Complete! 🌳');
        return;
    }
    
    trees++;
    setStorageData('treesGrown', trees);
    
    if (elements.treesGrown) elements.treesGrown.textContent = trees;
    
    // First tree achievement
    if (trees === 1) {
        showAchievement('First Tree Grown! 🌳');
    } else if (trees === 10) {
        showAchievement('Forest Starter! 🌲');
    } else if (trees === 50) {
        showAchievement('Master Gardener! 🏆');
    }
}

// ====== Pet Functions ======
function updatePetState(isStudying) {
    if (!elements.pet) return;
    
    if (isStudying) {
        elements.pet.classList.add('sleeping');
        elements.pet.classList.remove('awake');
        if (elements.petStatus) elements.petStatus.textContent = 'Sleeping peacefully...';
    } else {
        elements.pet.classList.remove('sleeping');
        elements.pet.classList.add('awake');
        if (elements.petStatus) elements.petStatus.textContent = 'Ready to study!';
    }
}

// ====== Progress Ring Functions ======
function updateProgressRing(progress) {
    if (!elements.progressRing) return;
    
    const circumference = 2 * Math.PI * 115; // radius is 115
    const offset = circumference - (progress / 100) * circumference;
    elements.progressRing.style.strokeDasharray = circumference;
    elements.progressRing.style.strokeDashoffset = offset;
    
    // Add pulse animation when progress updates
    if (progress > 0 && progress % 25 < 1) {
        elements.progressRing.style.animation = 'none';
        setTimeout(() => {
            elements.progressRing.style.animation = '';
        }, 10);
    }
}

// ====== Display Functions ======
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateTimerDisplay() {
    if (elements.timerDisplay) {
        elements.timerDisplay.textContent = formatTime(state.timeRemaining);
    }
}

function updateButtonStates(isRunning) {
    if (elements.startBtn) elements.startBtn.disabled = isRunning;
    if (elements.pauseBtn) elements.pauseBtn.disabled = !isRunning;
}

function updateStats() {
    const totalTime = getStorageData('totalStudyTime', 0);
    const sessions = getStorageData('sessionsCompleted', 0);
    const trees = getStorageData('treesGrown', 0);
    const streak = getStorageData('studyStreak', 0);
    
    const hours = Math.floor(totalTime / 3600);
    
    if (elements.todaySessions) elements.todaySessions.textContent = state.sessionsToday;
    if (elements.treesGrown) elements.treesGrown.textContent = trees;
    if (elements.totalHours) elements.totalHours.textContent = hours + 'h';
    if (elements.streakDays) elements.streakDays.textContent = streak;
}

function setRandomQuote() {
    if (elements.motivationQuote) {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        elements.motivationQuote.textContent = randomQuote;
    }
}

// ====== Achievement Functions ======
function showAchievement(name) {
    if (!elements.achievementToast) return;
    
    elements.achievementName.textContent = name;
    elements.achievementToast.classList.remove('hidden');
    
    setTimeout(() => {
        elements.achievementToast.classList.add('hidden');
    }, 4000);
}

// ====== Timer Control Functions ======
function startTimer() {
    if (state.isRunning || state.timerInterval) return;
    
    state.isRunning = true;
    updateButtonStates(true);
    updatePetState(true);
    
    // Add running animations
    const progressRing = document.querySelector('.progress-ring');
    const timerDisplay = elements.timerDisplay;
    if (progressRing) progressRing.classList.add('running');
    if (timerDisplay) timerDisplay.classList.add('running');
    
    // Update tree to seed at start
    if (state.mode === 'study') {
        updateTreeStage(0);
    }
    
    state.timerInterval = setInterval(() => {
        state.timeRemaining--;
        updateTimerDisplay();
        
        // Calculate progress
        const progress = ((state.timerDuration - state.timeRemaining) / state.timerDuration) * 100;
        updateProgressRing(progress);
        
        // Update tree growth during study
        if (state.mode === 'study') {
            updateTreeStage(progress);
        }
        
        if (state.timeRemaining <= 0) {
            timerComplete();
        }
    }, 1000);
}

function pauseTimer() {
    if (!state.isRunning) return;
    
    state.isRunning = false;
    clearInterval(state.timerInterval);
    state.timerInterval = null;
    updateButtonStates(false);
    updatePetState(false);
    
    // Remove running animations
    const progressRing = document.querySelector('.progress-ring');
    const timerDisplay = elements.timerDisplay;
    if (progressRing) progressRing.classList.remove('running');
    if (timerDisplay) timerDisplay.classList.remove('running');
}

function resetTimer() {
    pauseTimer();
    state.timeRemaining = state.timerDuration;
    updateTimerDisplay();
    updateProgressRing(0);
    updatePetState(false);
    
    if (state.mode === 'study') {
        updateTreeStage(0);
    }
}

function timerComplete() {
    pauseTimer();
    
    if (state.mode === 'study') {
        // Save session
        saveSession();
        
        // Add XP and coins
        addXPAndCoins();
        
        // Grow tree
        growTreeComplete();
        
        // Update today's sessions
        state.sessionsToday++;
        updateStats();
        
        // Show completion
        updateTreeStage(100);
        showAchievement('Session Complete! 🎉');
        
        // Send desktop notification
        sendNotification('Study Session Complete! 🎉', `Great job! You completed a 25-minute session. +${XP_PER_SESSION} XP, +${COINS_PER_SESSION} coins!`);
    } else {
        // Break complete notification
        sendNotification('Break Time Over! ☕', 'Time to get back to studying!');
    }
    
    // Reset timer
    state.timeRemaining = state.timerDuration;
    updateTimerDisplay();
    
    // New quote
    setRandomQuote();
}

// Send desktop notification via Python API
async function sendNotification(title, message) {
    try {
        const response = await fetch('http://localhost:5000/api/notify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, message })
        });
        
        if (response.ok) {
            console.log('Notification sent successfully');
        }
    } catch (error) {
        console.log('Notification API not running (optional feature)');
    }
}

function saveSession() {
    if (state.mode !== 'study') return;
    
    let totalTime = getStorageData('totalStudyTime', 0);
    let sessions = getStorageData('sessionsCompleted', 0);
    
    // Use the actual timer duration from settings, not the constant
    const studyDuration = parseInt(localStorage.getItem('studyDurationSetting') || '1500');
    totalTime += studyDuration;
    sessions++;
    
    setStorageData('totalStudyTime', totalTime);
    setStorageData('sessionsCompleted', sessions);
    
    // Update streak
    updateStreak();
}

function updateStreak() {
    const today = new Date().toDateString();
    const lastStudyDate = getStorageData('lastStudyDate', '');
    let streak = getStorageData('studyStreak', 0);
    
    if (lastStudyDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (lastStudyDate === yesterday.toDateString()) {
            streak++;
        } else if (lastStudyDate !== today) {
            streak = 1;
        }
        
        setStorageData('studyStreak', streak);
        setStorageData('lastStudyDate', today);
    }
}

// ====== Mode Switching Functions ======
function switchMode(mode) {
    pauseTimer();
    
    // Remove active class from all mode buttons
    document.querySelectorAll('.mode-card').forEach(btn => {
        btn.classList.remove('active');
    });
    
    state.mode = mode;
    
    // Get durations from settings or use defaults
    const studyDuration = parseInt(localStorage.getItem('studyDurationSetting') || '1500');
    const breakDuration = parseInt(localStorage.getItem('breakDurationSetting') || '300');
    
    console.log('📝 Settings Debug:');
    console.log('Study Duration from settings:', studyDuration);
    console.log('Break Duration from settings:', breakDuration);
    
    switch (mode) {
        case 'study':
            state.timerDuration = studyDuration;
            if (elements.studyModeBtn) elements.studyModeBtn.classList.add('active');
            if (elements.timerType) elements.timerType.innerHTML = '<i class="fas fa-book-open"></i> Study Session';
            break;
        case 'shortBreak':
            state.timerDuration = breakDuration;
            if (elements.shortBreakBtn) elements.shortBreakBtn.classList.add('active');
            if (elements.timerType) elements.timerType.innerHTML = '<i class="fas fa-coffee"></i> Short Break';
            break;
        case 'longBreak':
            state.timerDuration = breakDuration;
            if (elements.longBreakBtn) elements.longBreakBtn.classList.add('active');
            if (elements.timerType) elements.timerType.innerHTML = '<i class="fas fa-couch"></i> Long Break';
            break;
    }
    
    console.log('Timer duration set to:', state.timerDuration, 'seconds');
    
    state.timeRemaining = state.timerDuration;
    updateTimerDisplay();
    updateProgressRing(0);
    
    if (mode === 'study') {
        updateTreeStage(0);
    }
}

// ====== Event Listeners ======
function setupEventListeners() {
    if (elements.startBtn) {
        elements.startBtn.addEventListener('click', startTimer);
    }
    if (elements.pauseBtn) {
        elements.pauseBtn.addEventListener('click', pauseTimer);
    }
    if (elements.resetBtn) {
        elements.resetBtn.addEventListener('click', resetTimer);
    }
    if (elements.studyModeBtn) {
        elements.studyModeBtn.addEventListener('click', () => switchMode('study'));
    }
    if (elements.shortBreakBtn) {
        elements.shortBreakBtn.addEventListener('click', () => switchMode('shortBreak'));
    }
    if (elements.longBreakBtn) {
        elements.longBreakBtn.addEventListener('click', () => switchMode('longBreak'));
    }
}

// ====== Initialize App ======
function initializeDefaultData() {
    // Check if this is a new user (no XP data)
    if (localStorage.getItem('totalXP') === null) {
        // Set default level 20 (requires 1900 XP for level 20)
        const defaultXP = 1900;
        const defaultCoins = 1000;
        const defaultTrees = 20;
        
        localStorage.setItem('totalXP', defaultXP);
        localStorage.setItem('coins', defaultCoins);
        localStorage.setItem('treesGrown', defaultTrees);
        localStorage.setItem('sessionsCompleted', 20);
        localStorage.setItem('totalStudyTime', 30000); // ~8.3 hours
        localStorage.setItem('studyStreak', 7);
    }
}

function init() {
    // Initialize default data for new users
    initializeDefaultData();
    
    createParticles();
    
    // Load saved timer duration from settings and initialize
    switchMode('study');
    
    updateLevelDisplay();
    updateCoinsDisplay();
    updateStats();
    setRandomQuote();
    updateTreeStage(0);
    updatePetState(false);
    setupEventListeners();
    
    // Check for first visit
    if (!localStorage.getItem('hasVisited')) {
        localStorage.setItem('hasVisited', 'true');
        showAchievement('Welcome to FocusGrow! 🌱');
    }
    
    // Initialize audio player
    initAudioPlayer();
}

// ====== Audio Player ======
function initAudioPlayer() {
    const audioToggle = document.getElementById('audioToggle');
    const audioControls = document.getElementById('audioControls');
    const backgroundAudio = document.getElementById('backgroundAudio');
    const volumeSlider = document.getElementById('volumeSlider');
    
    if (!audioToggle || !backgroundAudio) return;
    
    let isPlaying = false;
    let showingControls = false;
    
    // Set initial volume
    backgroundAudio.volume = volumeSlider ? volumeSlider.value / 100 : 0.5;
    
    // Preload audio
    backgroundAudio.load();
    
    // Audio event listeners for debugging
    backgroundAudio.addEventListener('canplay', () => {
        console.log('Audio can play - ready to start');
    });
    
    backgroundAudio.addEventListener('error', (e) => {
        console.error('Audio error:', e);
        console.error('Audio error code:', backgroundAudio.error?.code);
        console.error('Audio error message:', backgroundAudio.error?.message);
    });
    
    backgroundAudio.addEventListener('loadeddata', () => {
        console.log('Audio loaded successfully');
    });
    
    // Toggle play/pause
    audioToggle.addEventListener('click', async () => {
        if (isPlaying) {
            backgroundAudio.pause();
            audioToggle.classList.remove('playing');
            audioToggle.innerHTML = '<i class="fas fa-music"></i>';
            isPlaying = false;
        } else {
            try {
                await backgroundAudio.play();
                audioToggle.classList.add('playing');
                audioToggle.innerHTML = '<i class="fas fa-pause"></i>';
                isPlaying = true;
                console.log('Audio playing successfully');
            } catch (err) {
                console.error('Audio playback failed:', err);
                showAchievement('Unable to play audio - check console 🎵');
            }
        }
    });
    
    // Show/hide controls on hover
    audioToggle.addEventListener('mouseenter', () => {
        showingControls = true;
        audioControls.style.display = 'flex';
    });
    
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.addEventListener('mouseleave', () => {
        showingControls = false;
        setTimeout(() => {
            if (!showingControls) {
                audioControls.style.display = 'none';
            }
        }, 300);
    });
    
    // Volume control
    if (volumeSlider) {
        volumeSlider.addEventListener('input', (e) => {
            backgroundAudio.volume = e.target.value / 100;
        });
    }
}

// Initialize the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
