let counter=0 
// odd = loginpage
//even = signup page
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.auth-container');
    const toggleButtons = document.querySelectorAll('.toggle-form');

    toggleButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            container.classList.toggle('sign-up-mode');
            const heading=document.querySelector(".welcome-heading");
            const message=document.querySelector(".welcome-message");
            if(counter%2){
                heading.style.fontSize = "clamp(1.8rem, 5vw, 2.2rem)";
                heading.textContent="WELCOME TO BIBLIOPHILIA!";
                message.textContent="Your journey into the world of books begins here. Join our community of book lovers!";
                counter++;
            }
            else{
                heading.style.fontSize = "30px";
                heading.textContent="WELCOME BACK TO BIBLIOPHILIA!";
                message.textContent="Your journey into the world of books begins here. Please Signup to join our community of book lovers back!";
                counter++;
            }
        });
    });
});
