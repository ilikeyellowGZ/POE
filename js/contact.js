document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Collect form data
    const formData = {
        firstName: document.getElementById('firstName').value.trim(),
        lastName: document.getElementById('lastName').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        message: document.getElementById('message').value.trim(),
    };

    // Validate form data
    if (!formData.firstName) {
        alert('First Name is required.');
        return;
    }
    if (!formData.lastName) {
        alert('Last Name is required.');
        return;
    }
    if (!formData.email || !validateEmail(formData.email)) {
        alert('Please enter a valid email address.');
        return;
    }
    if (!formData.phone || !validatePhone(formData.phone)) {
        alert('Please enter a valid phone number.');
        return;
    }
    if (!formData.message) {
        alert('Message is required.');
        return;
    }

    // Log data to the console
    console.log('Form Data:', formData);

    // Store data in local storage
    localStorage.setItem('contactFormData', JSON.stringify(formData));

    // Add animation class to the form
    const form = document.getElementById('formContainer');
    form.classList.add('form-success-animation');

    // Remove the animation class after the animation ends
    form.addEventListener('animationend', () => {
        form.classList.remove('form-success-animation');
        form.reset(); // Clear the form fields
    });
});

// Helper function to validate email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Helper function to validate phone number
function validatePhone(phone) {
    const phoneRegex = /^[0-9]{10,15}$/; // Accepts numbers with 10-15 digits
    return phoneRegex.test(phone);
}