let score = 0;
let autoClickers = 0;
let multiplier = 1;

// Basic click functionality
document.getElementById('mainCrystal').addEventListener('click', () => {
    score += 1 * multiplier;
    updateScore();
});

// Game loop
setInterval(() => {
    score += autoClickers * multiplier;
    updateScore();
}, 1000);

function updateScore() {
    document.getElementById('score').textContent = score;
}

function buyUpgrade(upgradeType) {
    const costs = {
        autoClicker: 50,
        multiplier: 100
    };

    if (score >= costs[upgradeType]) {
        score -= costs[upgradeType];
        if (upgradeType === 'autoClicker') autoClickers++;
        if (upgradeType === 'multiplier') multiplier *= 2;
        updateScore();
    }
}

function showShop() {
    document.getElementById('shopModal').style.display = 'block';
}

function showPremium() {
    document.getElementById('premiumModal').style.display = 'block';
}

function closeModals() {
    document.getElementById('shopModal').style.display = 'none';
    document.getElementById('premiumModal').style.display = 'none';
}