// Register form handler
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;
    
    // Store user data (in real app, this would be on server)
    localStorage.setItem('registeredUser', JSON.stringify({
        fullname,
        email,
        username,
        password
    }));
    
    // Auto login and redirect
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', username);
    
    alert('Account created successfully! 🎉');
    window.location.href = 'dashboard.html';
});