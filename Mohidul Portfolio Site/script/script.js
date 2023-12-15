// DOM Elements
const header = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarSupportedContent');
const backToTopButton = document.querySelector("#back-to-top-btn");
const themeToggle = document.querySelector("#theme-toggle");

// Navbar Dark on Scroll
window.onscroll = () => {
    const top = window.scrollY;
    header.classList.toggle('navbarDark', top >= 100);

    // Back to Top Button Visibility
    backToTopButton.style.display = (window.pageYOffset > 300) ? "block" : "none";
};

// Collapse Navbar after Click on Small Devices
navLinks.forEach((link) => {
    link.addEventListener('click', () => new bootstrap.Collapse(menuToggle).toggle());
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Back to Top Functionality
backToTopButton.addEventListener("click", () => window.scrollTo(0, 0));

// Theme Toggle (Dark/Light Mode)
themeToggle.addEventListener("click", () => document.body.classList.toggle("dark-theme"));

// Reveal Elements on Scroll
const revealOnScroll = () => {
    document.querySelectorAll('.reveal').forEach((elem) => {
        const windowHeight = window.innerHeight;
        const elementTop = elem.getBoundingClientRect().top;
        const elementVisible = 150;

        elem.classList.toggle('active', elementTop < windowHeight - elementVisible);
    });
};

window.addEventListener('scroll', revealOnScroll);
