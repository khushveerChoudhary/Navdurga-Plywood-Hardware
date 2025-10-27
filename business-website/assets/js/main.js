// Smooth scroll effect for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Background overlay fade on scroll
(() => {
    const root = document.documentElement;
    const initial = 0.6; // starting overlay opacity (darker)
    const final = 0.12;  // final overlay opacity when scrolled

    // clamp helper
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

    let ticking = false;

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY || window.pageYOffset;
                // control how quickly the image appears: use one viewport height as range
                const progress = clamp(scrollY / (window.innerHeight * 0.9), 0, 1);
                const value = initial + (final - initial) * progress;
                root.style.setProperty('--bg-overlay', value.toFixed(3));
                ticking = false;
            });
            ticking = true;
        }
    }

    // initialize
    root.style.setProperty('--bg-overlay', initial);
    window.addEventListener('scroll', onScroll, { passive: true });
})();