const resAside = document.querySelector('.aside');
const navLinks = document.querySelector('.nav-links');

resAside.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    resAside.classList.toggle('active');
});
