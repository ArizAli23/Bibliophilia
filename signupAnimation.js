document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.auth-container');
    const toggleButtons = document.querySelectorAll('.toggle-form');

    toggleButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            container.classList.toggle('sign-up-mode');
        });
    });
});