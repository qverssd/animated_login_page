const container = document.querySelector('.container');
const signButton = document.querySelector('.signup-section header');
const loginButton = document.querySelector('.login-section header');

loginButton.addEventListener('click', () => {
    container.classList.add('active');
});

signButton.addEventListener('click', () => {
    container.classList.remove('active');
});