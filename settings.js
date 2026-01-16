// Settings management
function loadSettings() {
    // Load saved settings or use defaults
    const studyDuration = localStorage.getItem('studyDurationSetting') || '1500';
    const breakDuration = localStorage.getItem('breakDurationSetting') || '300';
    const autoStartBreaks = localStorage.getItem('autoStartBreaks') === 'true';
    const soundNotifications = localStorage.getItem('soundNotifications') !== 'false';
    const browserNotifications = localStorage.getItem('browserNotifications') === 'true';
    
    // Set form values
    document.getElementById('studyDuration').value = studyDuration;
    document.getElementById('breakDuration').value = breakDuration;
    document.getElementById('autoStartBreaks').checked = autoStartBreaks;
    document.getElementById('soundNotifications').checked = soundNotifications;
    document.getElementById('browserNotifications').checked = browserNotifications;
}

// Save settings
document.getElementById('saveSettingsBtn').addEventListener('click', function() {
    const studyDuration = document.getElementById('studyDuration').value;
    const breakDuration = document.getElementById('breakDuration').value;
    const autoStartBreaks = document.getElementById('autoStartBreaks').checked;
    const soundNotifications = document.getElementById('soundNotifications').checked;
    const browserNotifications = document.getElementById('browserNotifications').checked;
    
    // Save to localStorage
    localStorage.setItem('studyDurationSetting', studyDuration);
    localStorage.setItem('breakDurationSetting', breakDuration);
    localStorage.setItem('autoStartBreaks', autoStartBreaks);
    localStorage.setItem('soundNotifications', soundNotifications);
    localStorage.setItem('browserNotifications', browserNotifications);
    
    showSuccess('Settings saved successfully!');
});

// Clear data
document.getElementById('clearDataBtn').addEventListener('click', async function() {
    if (await confirmClearData()) {
        // Clear ALL data including XP and coins to trigger re-initialization
        localStorage.removeItem('totalXP');
        localStorage.removeItem('coins');
        localStorage.removeItem('treesGrown');
        localStorage.removeItem('totalStudyTime');
        localStorage.removeItem('sessionsCompleted');
        localStorage.removeItem('studyStreak');
        
        showSuccess('All data has been cleared!');
        setTimeout(() => window.location.reload(), 1500);
    }
});

// Logout button in settings
document.getElementById('logoutSettingsBtn')?.addEventListener('click', async function() {
    if (await confirmLogout()) {
        // Clear session data
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('currentUser');
        
        // Redirect to login page
        window.location.href = 'index.html';
    }
});

// Request notification permission
document.getElementById('browserNotifications').addEventListener('change', function() {
    if (this.checked && 'Notification' in window) {
        Notification.requestPermission();
    }
});

// Initialize
loadSettings();