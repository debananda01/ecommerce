// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const loginLink = document.querySelector('#log');

// console.log(loginLink)
// Check if user is logged in
const isLoggedIn = localStorage.getItem('isLoggedIn');

if (isLoggedIn === 'true') {
    // If user is logged in, change "Login" to "Logout"
    loginLink.textContent = 'Logout';
    loginLink.setAttribute('href', '#');
    // Add event listener to handle logout
    loginLink.addEventListener('click', handleLogout);
}

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// Function to handle logout
function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    // After logout, redirect to login page
    window.location.href = "/index.html";
}
