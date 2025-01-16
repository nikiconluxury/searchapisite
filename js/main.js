// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add click handlers for buttons
document.querySelector('.primary-btn').addEventListener('click', () => {
    // Add your sign-up or get started logic here
    console.log('Get Started clicked');
});

document.querySelector('.secondary-btn').addEventListener('click', () => {
    // Add your documentation navigation logic here
    console.log('View Documentation clicked');
});