// Garden page functionality

// Tree data (same as script.js)
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

// Load garden data
function loadGardenData() {
    const trees = parseInt(localStorage.getItem('treesGrown') || 0);
    const sessions = parseInt(localStorage.getItem('sessionsCompleted') || 0);
    const ownedTrees = getOwnedTrees();
    const coins = getStorageData('coins', 0);
    const level = calculateLevel(getStorageData('totalXP', 0));
    const maxTrees = 25; // Maximum 25 trees
    
    document.getElementById('totalTrees').textContent = trees;
    document.getElementById('totalFruits').textContent = Math.floor(sessions * 2);
    document.getElementById('treeSpecies').textContent = ownedTrees.length;
    document.getElementById('coinsDisplay').textContent = coins;
    
    // Update tree slots info
    updateTreeSlotsDisplay(trees, maxTrees);
    
    // Generate forest
    generateForest(trees);
    
    // Render tree preview (first 6)
    renderTreePreview();
    
    // Render full tree shop in modal
    renderTreeShop();
}

// Update tree slots display
function updateTreeSlotsDisplay(current, max) {
    const treesPlantedEl = document.getElementById('treesPlanted');
    const maxTreesEl = document.getElementById('maxTrees');
    const slotsHintEl = document.querySelector('.slots-hint');
    
    if (treesPlantedEl) treesPlantedEl.textContent = current;
    if (maxTreesEl) maxTreesEl.textContent = max;
    
    if (slotsHintEl) {
        if (current >= max) {
            slotsHintEl.textContent = '🔒 Level up to unlock more slots!';
            slotsHintEl.style.color = '#fbbf24';
        } else {
            const remaining = max - current;
            slotsHintEl.textContent = `✨ ${remaining} slot${remaining !== 1 ? 's' : ''} available`;
            slotsHintEl.style.color = '#86efac';
        }
    }
}

// Get helper functions
function getStorageData(key, defaultValue = 0) {
    const value = localStorage.getItem(key);
    if (value === null) return defaultValue;
    return typeof defaultValue === 'number' ? parseInt(value) : value;
}

function calculateLevel(xp) {
    return Math.floor(xp / 100) + 1;
}

function getOwnedTrees() {
    const owned = localStorage.getItem('ownedTrees');
    return owned ? JSON.parse(owned) : ['oak'];
}

function getActiveTree() {
    return localStorage.getItem('activeTree') || 'oak';
}

function setActiveTree(treeKey) {
    localStorage.setItem('activeTree', treeKey);
    renderTreePreview(); // Update preview
    renderTreeShop(); // Re-render shop to update selection
    showToast(`${TREES[treeKey].name} selected!`, 'success');
}

function purchaseTree(treeKey) {
    const tree = TREES[treeKey];
    const coins = getStorageData('coins', 0);
    const level = calculateLevel(getStorageData('totalXP', 0));
    const ownedTrees = getOwnedTrees();
    
    // Check if already owned
    if (ownedTrees.includes(treeKey)) {
        showToast('Already owned!', 'error');
        return;
    }
    
    // Check level requirement
    if (level < tree.unlockLevel) {
        showToast(`Unlock at level ${tree.unlockLevel}`, 'error');
        return;
    }
    
    // Check coins
    if (coins < tree.cost) {
        showToast(`Need ${tree.cost} coins`, 'error');
        return;
    }
    
    // Purchase successful
    const newCoins = coins - tree.cost;
    localStorage.setItem('coins', newCoins);
    
    ownedTrees.push(treeKey);
    localStorage.setItem('ownedTrees', JSON.stringify(ownedTrees));
    
    setActiveTree(treeKey);
    showToast(`${tree.name} unlocked! 🎉`, 'success');
    
    // Update coins display if exists
    const coinsEl = document.getElementById('coinsDisplay');
    if (coinsEl) coinsEl.textContent = newCoins;
    
    // Update species count
    const speciesEl = document.getElementById('treeSpecies');
    if (speciesEl) speciesEl.textContent = ownedTrees.length;
}

// Render tree preview (first 6 trees)
function renderTreePreview() {
    const container = document.getElementById('treePreview');
    if (!container) return;
    
    container.innerHTML = '';
    
    const ownedTrees = getOwnedTrees();
    const activeTree = getActiveTree();
    const userLevel = calculateLevel(getStorageData('totalXP', 0));
    const userCoins = getStorageData('coins', 0);
    
    // Get first 6 trees
    const treeKeys = Object.keys(TREES).slice(0, 6);
    
    treeKeys.forEach(key => {
        const tree = TREES[key];
        const isOwned = ownedTrees.includes(key);
        const isActive = activeTree === key;
        const isLocked = userLevel < tree.unlockLevel;
        
        const card = document.createElement('div');
        card.className = `tree-card ${isActive ? 'active' : ''} ${!isOwned ? 'locked' : ''}`;
        
        let statusHTML = '';
        if (isOwned) {
            statusHTML = isActive ? 
                '<span class="tree-status equipped"><i class="fas fa-check"></i> Active</span>' :
                '<span class="tree-status owned"><i class="fas fa-leaf"></i> Owned</span>';
        } else if (isLocked) {
            statusHTML = `<span class="tree-status locked-badge"><i class="fas fa-lock"></i> Level ${tree.unlockLevel}</span>`;
        } else {
            statusHTML = `<span class="tree-status price"><i class="fas fa-coins"></i> ${tree.cost}</span>`;
        }
        
        card.innerHTML = `
            <div class="tree-card-image">
                <img src="${tree.image}" alt="${tree.name}" class="tree-preview-img">
            </div>
            <h4 class="tree-card-name">${tree.name}</h4>
            <p class="tree-card-desc">${tree.description}</p>
            ${statusHTML}
            ${!isOwned && !isLocked && userCoins < tree.cost ? '<div class="insufficient-coins"><i class="fas fa-exclamation-circle"></i> Not enough coins</div>' : ''}
        `;
        
        // Click handler
        if (isOwned) {
            card.onclick = () => setActiveTree(key);
            card.style.cursor = 'pointer';
        } else if (!isLocked) {
            card.onclick = async () => {
                if (await confirmPurchase(tree.name, tree.cost)) {
                    purchaseTree(key);
                }
            };
            card.style.cursor = 'pointer';
        }
        
        container.appendChild(card);
    });
}

// Render tree shop
function renderTreeShop() {
    const container = document.getElementById('treeShop');
    if (!container) return;
    
    container.innerHTML = '';
    
    const ownedTrees = getOwnedTrees();
    const activeTree = getActiveTree();
    const userLevel = calculateLevel(getStorageData('totalXP', 0));
    const userCoins = getStorageData('coins', 0);
    
    Object.keys(TREES).forEach(key => {
        const tree = TREES[key];
        const isOwned = ownedTrees.includes(key);
        const isActive = activeTree === key;
        const isLocked = userLevel < tree.unlockLevel;
        
        const card = document.createElement('div');
        card.className = `tree-card ${isActive ? 'active' : ''} ${!isOwned ? 'locked' : ''}`;
        
        let statusHTML = '';
        if (isOwned) {
            statusHTML = isActive ? 
                '<span class="tree-status equipped"><i class="fas fa-check"></i> Active</span>' :
                '<span class="tree-status owned"><i class="fas fa-leaf"></i> Owned</span>';
        } else if (isLocked) {
            statusHTML = `<span class="tree-status locked-badge"><i class="fas fa-lock"></i> Level ${tree.unlockLevel}</span>`;
        } else {
            statusHTML = `<span class="tree-status price"><i class="fas fa-coins"></i> ${tree.cost}</span>`;
        }
        
        card.innerHTML = `
            <div class="tree-card-image">
                <img src="${tree.image}" alt="${tree.name}" class="tree-preview-img">
            </div>
            <h4 class="tree-card-name">${tree.name}</h4>
            <p class="tree-card-desc">${tree.description}</p>
            ${statusHTML}
            ${!isOwned && !isLocked && userCoins < tree.cost ? '<div class="insufficient-coins"><i class="fas fa-exclamation-circle"></i> Not enough coins</div>' : ''}
        `;
        
        // Click handler
        if (isOwned) {
            card.onclick = () => setActiveTree(key);
            card.style.cursor = 'pointer';
        } else if (!isLocked) {
            card.onclick = async () => {
                if (await confirmPurchase(tree.name, tree.cost)) {
                    purchaseTree(key);
                }
            };
            card.style.cursor = 'pointer';
        }
        
        container.appendChild(card);
    });
}

// Toast notification
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: ${type === 'error' ? '#ef4444' : type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 14px 20px;
        border-radius: 12px;
        box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        z-index: 10000;
        font-weight: 500;
        animation: slideInRight 0.3s ease forwards;
    `;
    
    // Add animation keyframes if not exist
    if (!document.querySelector('#toastAnimations')) {
        const style = document.createElement('style');
        style.id = 'toastAnimations';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes fadeOut {
                from {
                    opacity: 1;
                }
                to {
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Generate forest view with mockup images
function generateForest(treeCount) {
    const forestImageContainer = document.getElementById('forestImageContainer');
    const emptyForest = document.getElementById('emptyForest');
    const forestImage = document.getElementById('forestImage');
    const forestTreeCount = document.getElementById('forestTreeCount');
    
    if (!forestImageContainer) return;
    
    if (treeCount === 0) {
        forestImageContainer.style.display = 'none';
        if (emptyForest) emptyForest.style.display = 'flex';
        return;
    }
    
    // Show forest, hide empty state
    forestImageContainer.style.display = 'block';
    if (emptyForest) emptyForest.style.display = 'none';
    
    // Select mockup based on tree count
    let mockupImage = 'images/mockup3.png'; // Default: 1-4 trees
    
    if (treeCount >= 25) {
        mockupImage = 'images/mockup1.png'; // 25+ trees - fullest forest
    } else if (treeCount >= 10) {
        mockupImage = 'images/mockup2.png'; // 10-24 trees - medium forest
    } else if (treeCount >= 5) {
        mockupImage = 'images/mockup3.png'; // 5-9 trees - small forest
    }
    
    forestImage.src = mockupImage;
    forestTreeCount.textContent = `${treeCount} Tree${treeCount !== 1 ? 's' : ''}`;
    
    // Also update viewer image
    const viewerImage = document.getElementById('forestViewerImage');
    if (viewerImage) {
        viewerImage.src = mockupImage;
    }
}

// Modal Functions
function openShopModal() {
    const modal = document.getElementById('shopModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeShopModal() {
    const modal = document.getElementById('shopModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Grow Forest Button - Plants a tree with animation
function plantTree() {
    const treesGrown = parseInt(localStorage.getItem('treesGrown') || 0);
    const level = calculateLevel(getStorageData('totalXP', 0));
    const maxTrees = level; // Level 1 = 1 tree, Level 2 = 2 trees, etc.
    
    // Check if user can plant more trees
    if (treesGrown >= maxTrees) {
        showToast(`🔒 Level ${level} allows max ${maxTrees} tree${maxTrees !== 1 ? 's' : ''}. Level up to plant more!`, 'warning');
        return;
    }
    
    const newTreeCount = treesGrown + 1;
    
    localStorage.setItem('treesGrown', newTreeCount);
    
    // Update display
    document.getElementById('totalTrees').textContent = newTreeCount;
    
    // Update tree slots display
    updateTreeSlotsDisplay(newTreeCount, maxTrees);
    
    // Show +1 animation
    const plantAnim = document.getElementById('plantAnimation');
    if (plantAnim) {
        plantAnim.classList.add('show');
        setTimeout(() => {
            plantAnim.classList.remove('show');
        }, 1000);
    }
    
    // Regenerate forest
    generateForest(newTreeCount);
    
    // Show success message with remaining slots
    const remaining = maxTrees - newTreeCount;
    if (remaining > 0) {
        showToast(`🌳 Tree planted! ${remaining} slot${remaining !== 1 ? 's' : ''} remaining`, 'success');
    } else {
        showToast(`🌳 Tree planted! Level up to unlock more slots!`, 'success');
    }
}

// Forest Viewer Functions
let viewerScale = 1;
let viewerPosX = 0;
let viewerPosY = 0;
let isDragging = false;
let startX, startY;

function openForestViewer() {
    const modal = document.getElementById('forestViewerModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        resetViewer();
    }
}

function closeForestViewer() {
    const modal = document.getElementById('forestViewerModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function resetViewer() {
    viewerScale = 1;
    viewerPosX = 0;
    viewerPosY = 0;
    updateViewerTransform();
}

function updateViewerTransform() {
    const img = document.getElementById('forestViewerImage');
    if (img) {
        img.style.transform = `translate(${viewerPosX}px, ${viewerPosY}px) scale(${viewerScale})`;
    }
}

function zoomIn() {
    viewerScale = Math.min(viewerScale + 0.25, 3);
    updateViewerTransform();
}

function zoomOut() {
    viewerScale = Math.max(viewerScale - 0.25, 0.5);
    updateViewerTransform();
}

// Initialize viewer drag functionality
function initForestViewer() {
    const wrapper = document.getElementById('forestViewerWrapper');
    const img = document.getElementById('forestViewerImage');
    
    if (!wrapper || !img) return;
    
    // Mouse events
    wrapper.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX - viewerPosX;
        startY = e.clientY - viewerPosY;
        wrapper.style.cursor = 'grabbing';
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        viewerPosX = e.clientX - startX;
        viewerPosY = e.clientY - startY;
        updateViewerTransform();
    });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
        if (wrapper) wrapper.style.cursor = 'grab';
    });
    
    // Touch events
    wrapper.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].clientX - viewerPosX;
        startY = e.touches[0].clientY - viewerPosY;
    });
    
    wrapper.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        viewerPosX = e.touches[0].clientX - startX;
        viewerPosY = e.touches[0].clientY - startY;
        updateViewerTransform();
    });
    
    wrapper.addEventListener('touchend', () => {
        isDragging = false;
    });
    
    // Scroll zoom
    wrapper.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (e.deltaY < 0) {
            zoomIn();
        } else {
            zoomOut();
        }
    });
}

// Initialize default data for new users
function initializeDefaultData() {
    if (localStorage.getItem('totalXP') === null) {
        // Set default level 20 (requires 1900 XP for level 20)
        const defaultXP = 1900;
        const defaultCoins = 1000;
        const defaultTrees = 20;
        
        localStorage.setItem('totalXP', defaultXP);
        localStorage.setItem('coins', defaultCoins);
        localStorage.setItem('treesGrown', defaultTrees);
        localStorage.setItem('sessionsCompleted', 20);
        localStorage.setItem('totalStudyTime', 30000);
        localStorage.setItem('studyStreak', 7);
    }
}

// Initialize
initializeDefaultData();
loadGardenData();

// Event Listeners
document.getElementById('viewAllBtn')?.addEventListener('click', openShopModal);
document.getElementById('closeModal')?.addEventListener('click', closeShopModal);
document.getElementById('modalOverlay')?.addEventListener('click', closeShopModal);
document.getElementById('growForestBtn')?.addEventListener('click', plantTree);

// Forest viewer events
document.getElementById('forestImageContainer')?.addEventListener('click', openForestViewer);
document.getElementById('closeForestViewer')?.addEventListener('click', closeForestViewer);
document.getElementById('forestModalOverlay')?.addEventListener('click', closeForestViewer);
document.getElementById('zoomInBtn')?.addEventListener('click', zoomIn);
document.getElementById('zoomOutBtn')?.addEventListener('click', zoomOut);
document.getElementById('resetViewBtn')?.addEventListener('click', resetViewer);

// Initialize forest viewer
initForestViewer();

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeShopModal();
    }
});
