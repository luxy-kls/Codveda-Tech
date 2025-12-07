// index.js

document.addEventListener('DOMContentLoaded', function() {
    
    const navButton = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('#main-nav');

    function toggleNav() {
        navMenu.classList.toggle('active');
        const isExpanded = navButton.getAttribute('aria-expanded') === 'true' || false;
        navButton.setAttribute('aria-expanded', !isExpanded);
    }

    navButton.addEventListener("click", toggleNav); 
});
