function closeBanner() {
    document.getElementById('promotionBanner').style.display = 'none';
}

// Booking modal functionality
function showBookingModal() {
    alert('Thank you for your interest! Our booking system would open here.');
}

// Add scroll animation for feature cards
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Initialize feature cards with opacity 0
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s, transform 0.5s';
});