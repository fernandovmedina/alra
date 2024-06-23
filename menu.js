document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById('menu-button');
    const closeButton = document.getElementById('close-button');
    const mobileNavLinks = document.getElementById('mobile-nav-links');

    menuButton.addEventListener('click', function() {
        mobileNavLinks.classList.remove('hidden');
        menuButton.classList.add('hidden');
        closeButton.classList.remove('hidden');
    });

    closeButton.addEventListener('click', function() {
        mobileNavLinks.classList.add('hidden');
        menuButton.classList.remove('hidden');
        closeButton.classList.add('hidden');
    });
});