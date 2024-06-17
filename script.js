
/*Create a script that when clicked, checks if both password 
and confirmation is the same else outputs an error message 
'* Passwords do not match' and changes the borders of the password/confirmation containers to red*/

function matchPass() {
    if (document.getElementById('password').value != document.getElementById('password-confirmation').value) {
        document.getElementById('passwordError').innerHTML = '*Passwords do not match!';
        document.getElementById('passwordError').style.color = 'red';
        document.getElementById('password').classList.add('error-border');
        document.getElementById('password-confirmation').classList.add('error-border');

    }
    else {
        document.getElementById('passwordError').innerHTML = '*Passwords do match!';
        document.getElementById('passwordError').style.color = 'green';
    }
}

//Now validate other input field(s)


//Names minimum of 3 characters
function minFirstName() {
    if (document.getElementById('first_name').value.length < 3) {
        document.getElementById('firstNameError').innerHTML = '*First Name must be at least 3 characters!';
        document.getElementById('firstNameError').style.color = 'red';
        document.getElementById('first_name').classList.add('error-border');
    }
}

function minLastName() {
    if (document.getElementById('last_name').value.length < 3) {
        document.getElementById('lastNameError').innerHTML = '*Last name must be atleast 3 characters!';
        document.getElementById('lastNameError').style.color = 'red';
        document.getElementById('last_name').classList.add('error-border');
    }
}

//email must match format or else highlighted red
function emailFormat() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailValue = emailInput.value.trim(); // This trims whitespace
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(emailValue)) {
        emailError.textContent = ''; // Clear any error message
        emailInput.classList.remove('error-border'); // Remove error class
        } 
        else {
            emailError.textContent = '*Invalid email format';
            document.getElementById('emailError').style.color = 'red';
            emailInput.classList.add('error-border'); // Add error class
    }
}

//phone number must match format or else highlighted red 
function phoneFormat() {
    const phoneInput = document.getElementById('phone_number');
    const phoneError = document.getElementById('phoneNumberError');
    const phoneValue = phoneInput.value.trim(); // Trim whitespace from input
    const phonePattern = /^\d{10}$/;
        if (phonePattern.test(phoneValue)) {
            phoneError.textContent = ''; // Clear any error message
            phoneInput.classList.remove('error-border'); // Remove error class
        } 
        else {
            phoneError.textContent = '*Invalid phone number.';
            document.getElementById('phoneNumberError').style.color = 'red';
            phoneInput.classList.add('error-border'); // Add error class
        }
}
