const form = document.querySelector('form');
const loginButton = document.querySelector('.login-button');
const fields = document.querySelectorAll('.input-block input');

loginButton.addEventListener('click', validateForm);

function validateForm(event) {
    event.preventDefault();

    for (const field of fields) {
        if (field.value === '') {
            handleValidationError();
            return;
        }
    }

    proceedWithSubmission();
}

function handleValidationError() {
    form.classList.add('reject');
}

function proceedWithSubmission() {
    form.classList.add('submitted');
}

form.addEventListener('animationend', handleAnimationEnd);

function handleAnimationEnd({ animationName }) {
    if (animationName == 'form-entrance') {
        form.classList.remove('entrance');
    }
    else if (animationName == 'form-reject') {
        form.classList.remove('reject');
    }
}
