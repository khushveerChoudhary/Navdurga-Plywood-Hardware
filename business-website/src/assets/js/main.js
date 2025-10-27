// main.js - Main JavaScript file for the business website

// Function to handle scroll animations
const handleScrollAnimations = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
};

// Event listener for scroll events
window.addEventListener('scroll', handleScrollAnimations);

// Initial call to handle animations on page load
document.addEventListener('DOMContentLoaded', handleScrollAnimations);