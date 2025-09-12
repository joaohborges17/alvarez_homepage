// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu toggle
const toggleBtn = document.getElementById('menu-toggle');
const mobileNav = document.querySelector('header nav');
toggleBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});

// Close mobile menu on link click or Enter key
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', () => mobileNav.classList.remove('active'));
    link.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') mobileNav.classList.remove('active');
    });
});

// Show floating buttons
window.addEventListener('load', () => {
    document.getElementById('floating-buttons').classList.add('show');
});
