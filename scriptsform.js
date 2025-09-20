// Toggling between Sign In and Sign Up
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
});

signupBtn.addEventListener('click', () => {
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
});

document.querySelector('#login-submit-btn').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Basic validation
    if (email && password) {
        alert('Logged in successfully!');
        // Redirect to index.html after successful login
        window.location.href = "index.html";  // Ensure path is correct
    } else {
        alert('Please enter both email and password');
    }
});


signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-password-confirm').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    if (email && password && confirmPassword) {
        alert('Signed up successfully!');
        // Redirect to another page after successful sign-up
        window.location.href = "index.html"; // Change this to your actual redirect URL
    } else {
        alert('Please fill all fields');
    }
    
});
