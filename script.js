// JavaScript to toggle menu
const menuIcon = document.getElementById('menu-icon');
const navtxt = document.querySelector('.navtxt');

menuIcon.addEventListener('click', () => {
    navtxt.classList.toggle('active');
});

// Update placeholder with chosen file name
const fileInput = document.getElementById('patientImage');
const placeholder = document.querySelector('.file-upload-label .placeholder');

fileInput.addEventListener('change', (event) => {
    const fileName = event.target.files.length > 0 ? event.target.files[0].name : 'Upload Your Image';
    placeholder.textContent = fileName; // Change the placeholder text to the file name
});

document.addEventListener('DOMContentLoaded', function () {
    // Open Signup Modal
    document.getElementById('openSignup').onclick = function () {
        document.getElementById('signupModal').style.display = 'block';
    };

    // Close Signup Modal
    document.getElementById('closeSignup').onclick = function () {
        document.getElementById('signupModal').style.display = 'none';
    };

    // Open Signin Modal
    document.getElementById('openSignin').onclick = function () {
        document.getElementById('signinModal').style.display = 'block';
    };

    // Close Signin Modal
    document.getElementById('closeSignin').onclick = function () {
        document.getElementById('signinModal').style.display = 'none';
    };

    // Open Contact Modal
    document.getElementById('openContact').onclick = function () {
        document.getElementById('contactModal').style.display = 'block';
    };

    // Close Contact Modal
    document.getElementById('closeContact').onclick = function () {
        document.getElementById('contactModal').style.display = 'none';
    };

    // Close modals when clicking outside of them
    window.onclick = function (event) {
        if (event.target == document.getElementById('signupModal') || event.target == document.getElementById('signinModal') || event.target == document.getElementById('contactModal')) {
            event.target.style.display = 'none';
        }
    };
});

