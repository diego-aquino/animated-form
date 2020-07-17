const form = document.querySelector('form');
const loginButton = document.querySelector('.login-button');
const fields = document.querySelectorAll('.input-block input');
const squareContainer = document.querySelector('.square-container');
const pageTitle = document.querySelector('.page-title');

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
    squareContainer.classList.add('exit');
    pageTitle.classList.add('exit');
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

createBackgroundSquares();

function createBackgroundSquares() {
    const numOfSquares = randomInt(15, 25);

    for (let i = 0; i < numOfSquares; i++) {
        const square = document.createElement('li');

        const size = randomInt(40, 100);
        const positionX = randomInt(0, 99);
        const positionY = - size;

        square.style.width = `${size}px`;
        square.style.height = `${size}px`;

        square.style.bottom = `${positionY}px`;
        square.style.left = `${positionX}%`;

        const opacity = randomInt(20, 50);

        square.style.opacity = `${opacity / 100}`;

        const delay = randomInt(0, 30);
        const duration = randomInt(15, 35);

        square.style.animationDuration = `${duration}s`;
        square.style.animationDelay = `${delay}s`;
        square.style.animationTimingFunction = 'linear';

        squareContainer.appendChild(square);
    }
}

function randomInt(start, end) {
    // random integer from start to end (inclusive)
    return Math.round(Math.random() * (end - start)) + start;
}
