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


document.getElementById('submitButton').addEventListener('click', async () => {
    const fileInput = document.getElementById('patientImage');
    const modelType = document.getElementById('modelType').value;
    const resultDiv = document.getElementById('predictionResult');

    // Clear previous results
    resultDiv.textContent = '';

    if (!fileInput.files.length) {
        resultDiv.textContent = "Please upload an image.";
        return;
    }

    const file = fileInput.files[0];

    // Check file type based on selected model
    if ((modelType === 'brain' && !['image/jpeg', 'image/png'].includes(file.type)) ||
        (modelType === 'oral' && file.type !== 'image/jpeg')) {
        resultDiv.textContent = `Invalid file type for ${modelType} model.`;
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch(`http://127.0.0.1:5000/predict/${modelType}`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Error in prediction API.');
        }

        const data = await response.json();
        resultDiv.textContent = `Prediction: ${data.prediction}`;
    } catch (error) {
        resultDiv.textContent = `Error: ${error.message}`;
    }
});

function submitForm() {
    const formData = new FormData(document.querySelector('#yourFormId'));
    fetch('/predict/oral', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log("Response from server: ", data); // Log the response to see the result in the browser console
        if (data && data.prediction) {
            // Display result in the UI
            document.getElementById('prediction-result').innerHTML = `Prediction: ${data.prediction}`;
        }
    })
    .catch(error => {
        console.error("Error during the fetch operation: ", error); // Log any errors in the fetch process
    });
}

// Assuming you are using a button to trigger this function
document.getElementById('submitButton').addEventListener('click', submitForm);

