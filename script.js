// JavaScript for handling form submissions
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const createAccountForm = document.getElementById('create-account-form');

    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            alert('Logged in as ' + username);
            // You can add more functionality here to authenticate the user
            window.location.href = 'payment.html';
        });
    }

    // Handle create account form submission
    if (createAccountForm) {
        createAccountForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const newUsername = document.getElementById('new-username').value;
            const newPassword = document.getElementById('new-password').value;
            alert('Account created for ' + newUsername);
            // You can add more functionality here to save the new user's account
            window.location.href = 'index.html';
        });
    }

    // Handle Google Pay button click
    const gpayButton = document.querySelector('.gpay-button');
    if (gpayButton) {
        gpayButton.addEventListener('click', () => {
            alert('Redirecting to Google Pay...');
            // Add any additional functionality here, like redirecting to a payment page
        });
    }
});
