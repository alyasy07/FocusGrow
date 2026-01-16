// Authentication checker
function checkAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (!isLoggedIn || isLoggedIn !== 'true') {
        window.location.href = 'login.html';
        return false;
    }
    
    // Display username if on dashboard
    const userName = document.getElementById('userName');
    if (userName) {
        const username = localStorage.getItem('username') || 'User';
        userName.textContent = username;
    }
    
    return true;
}

// Logout handler
function setupLogout() {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (confirm('Are you sure you want to logout?')) {
                localStorage.removeItem('isLoggedIn');
                window.location.href = 'login.html';
            }
        });
    }
}

// Check auth on page load
if (window.location.pathname.includes('dashboard.html') || 
    window.location.pathname.includes('stats.html') || 
    window.location.pathname.includes('settings.html')) {
    checkAuth();
    setupLogout();
}