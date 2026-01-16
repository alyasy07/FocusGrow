// Load and display statistics
function loadStats() {
    const totalTime = parseInt(localStorage.getItem('totalStudyTime') || 0);
    const sessions = parseInt(localStorage.getItem('sessionsCompleted') || 0);
    const totalXP = parseInt(localStorage.getItem('totalXP') || 0);
    const coins = parseInt(localStorage.getItem('coins') || 0);
    const trees = parseInt(localStorage.getItem('treesGrown') || 0);
    const streak = parseInt(localStorage.getItem('studyStreak') || 0);
    
    // Calculate hours and minutes
    const hours = Math.floor(totalTime / 3600);
    const minutes = Math.floor((totalTime % 3600) / 60);
    
    // Update main stats
    const totalTimeEl = document.getElementById('totalTimeStats');
    const sessionCountEl = document.getElementById('sessionCountStats');
    const streakCountEl = document.getElementById('streakCount');
    const avgDailyEl = document.getElementById('avgDaily');
    
    if (totalTimeEl) totalTimeEl.textContent = `${hours}h ${minutes}m`;
    if (sessionCountEl) sessionCountEl.textContent = sessions;
    if (streakCountEl) streakCountEl.textContent = streak;
    
    // Calculate daily average
    const avgMinutes = sessions > 0 ? Math.floor((totalTime / 60) / Math.max(1, sessions / 4)) : 0;
    if (avgDailyEl) avgDailyEl.textContent = `${avgMinutes}m`;
    
    // Update highlight cards
    const treesGrownEl = document.getElementById('treesGrownStats');
    const totalXPEl = document.getElementById('totalXPStats');
    const totalCoinsEl = document.getElementById('totalCoinsStats');
    
    if (treesGrownEl) treesGrownEl.textContent = trees;
    if (totalXPEl) totalXPEl.textContent = totalXP.toLocaleString();
    if (totalCoinsEl) totalCoinsEl.textContent = coins.toLocaleString();
    
    // Update progress bars
    updateProgressBars(trees, totalXP, coins);
    
    // Update weekly chart
    updateWeeklyChart();
}

// Update progress bar fills
function updateProgressBars(trees, xp, coins) {
    const treeFill = document.querySelector('.highlight-fill:not(.xp):not(.coins)');
    const xpFill = document.querySelector('.highlight-fill.xp');
    const coinsFill = document.querySelector('.highlight-fill.coins');
    
    if (treeFill) {
        const treeProgress = Math.min((trees / 100) * 100, 100);
        treeFill.style.width = treeProgress + '%';
    }
    
    if (xpFill) {
        const xpProgress = Math.min((xp / 1000) * 100, 100);
        xpFill.style.width = xpProgress + '%';
    }
    
    if (coinsFill) {
        const coinsProgress = Math.min((coins / 500) * 100, 100);
        coinsFill.style.width = coinsProgress + '%';
    }
}

// Update weekly chart with stored data
function updateWeeklyChart() {
    const weekData = JSON.parse(localStorage.getItem('weeklyData') || 'null');
    const bars = document.querySelectorAll('.chart-bar .bar-fill');
    
    if (weekData && bars.length > 0) {
        const maxMinutes = Math.max(...Object.values(weekData), 60);
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        
        bars.forEach((bar, index) => {
            const dayData = weekData[days[index]] || 0;
            const height = maxMinutes > 0 ? (dayData / maxMinutes) * 100 : 0;
            bar.style.height = height + '%';
        });
    }
    
    // Highlight today
    const today = new Date().getDay();
    const dayIndex = today === 0 ? 6 : today - 1; // Convert Sunday=0 to index 6
    const chartBars = document.querySelectorAll('.chart-bar');
    
    chartBars.forEach((bar, index) => {
        bar.classList.toggle('today', index === dayIndex);
    });
}

// Clear history button
const clearBtn = document.getElementById('clearHistory');
if (clearBtn) {
    clearBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear your session history?')) {
            // Keep main stats, just clear activity display
            const activityList = document.getElementById('activityList');
            if (activityList) {
                activityList.innerHTML = `
                    <div class="activity-item" style="justify-content: center; opacity: 0.5;">
                        <span>No recent sessions</span>
                    </div>
                `;
            }
        }
    });
}

// Initialize on page load
loadStats();