// Custom Confirmation Dialog
// Usage: showConfirm({ title, message, type, confirmText, cancelText }).then(result => {})

function showConfirm(options = {}) {
    return new Promise((resolve) => {
        const {
            title = 'Confirm',
            message = 'Are you sure?',
            type = 'info', // info, warning, danger, success
            confirmText = 'OK',
            cancelText = 'Cancel',
            icon = null
        } = options;
        
        // Get icon based on type
        const icons = {
            info: '❓',
            warning: '⚠️',
            danger: '🗑️',
            success: '✅',
            purchase: '🛒',
            logout: '👋',
            plant: '🌱'
        };
        
        const displayIcon = icon || icons[type] || icons.info;
        
        // Create dialog HTML
        const overlay = document.createElement('div');
        overlay.className = 'confirm-overlay';
        overlay.innerHTML = `
            <div class="confirm-dialog">
                <div class="confirm-icon ${type}">${displayIcon}</div>
                <div class="confirm-title">${title}</div>
                <div class="confirm-message">${message}</div>
                <div class="confirm-buttons">
                    ${cancelText ? `<button class="confirm-btn cancel">${cancelText}</button>` : ''}
                    <button class="confirm-btn confirm ${type}">${confirmText}</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(overlay);
        
        // Trigger animation
        requestAnimationFrame(() => {
            overlay.classList.add('active');
        });
        
        // Handle button clicks
        const cancelBtn = overlay.querySelector('.confirm-btn.cancel');
        const confirmBtn = overlay.querySelector('.confirm-btn.confirm');
        
        function closeDialog(result) {
            overlay.classList.remove('active');
            setTimeout(() => {
                overlay.remove();
                resolve(result);
            }, 300);
        }
        
        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => closeDialog(false));
        }
        confirmBtn.addEventListener('click', () => closeDialog(true));
        
        // Close on overlay click
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeDialog(false);
            }
        });
        
        // Close on Escape key
        function handleEscape(e) {
            if (e.key === 'Escape') {
                closeDialog(false);
                document.removeEventListener('keydown', handleEscape);
            }
        }
        document.addEventListener('keydown', handleEscape);
    });
}

// Alert replacement (single button)
function showAlert(options = {}) {
    const {
        title = 'Notice',
        message = '',
        type = 'info',
        buttonText = 'OK',
        icon = null
    } = options;
    
    return showConfirm({
        title,
        message,
        type,
        confirmText: buttonText,
        cancelText: '',
        icon
    }).then(() => true);
}

// Quick helper functions
function confirmPurchase(itemName, cost) {
    return showConfirm({
        title: 'Purchase Item',
        message: `Purchase <strong>${itemName}</strong> for <strong>${cost} coins</strong>?`,
        type: 'success',
        icon: '🛒',
        confirmText: 'Buy Now',
        cancelText: 'Cancel'
    });
}

function confirmLogout() {
    return showConfirm({
        title: 'Logout',
        message: 'Are you sure you want to sign out of your account?',
        type: 'warning',
        icon: '👋',
        confirmText: 'Logout',
        cancelText: 'Stay'
    });
}

function confirmClearData() {
    return showConfirm({
        title: 'Clear All Data',
        message: 'This will permanently delete all your progress, trees, and statistics. This action cannot be undone!',
        type: 'danger',
        icon: '🗑️',
        confirmText: 'Clear Data',
        cancelText: 'Keep Data'
    });
}

function showSuccess(message, submessage = '') {
    return showConfirm({
        title: message,
        message: submessage,
        type: 'success',
        icon: '✅',
        confirmText: 'Great!',
        cancelText: ''
    });
}
