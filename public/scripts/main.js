const fields = document.querySelectorAll('.input-block input');
const loginButton = document.querySelector('.login-button');

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

const form = document.querySelector('form');
const squareContainer = document.querySelector('.square-container');
const pageTitle = document.querySelector('.page-title');

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

        const sizeInPixels = randomInt(40, 100);
        square.style.width = `${sizeInPixels}px`;
        square.style.height = `${sizeInPixels}px`;

        const positionXInVW = randomInt(0, 99);
        const positionYInPixels = - sizeInPixels;
        square.style.left = `${positionXInVW}vw`;
        square.style.bottom = `${positionYInPixels}px`;

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
    // returns a random integer from 'start' to 'end' (inclusive)
    return Math.round(Math.random() * (end - start)) + start;
}
