
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

// Menambahkan event klik
hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});