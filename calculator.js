const display = document.querySelector('.calculator-display');
const buttons = document.querySelector('.calculator-buttons');

let firstValue = '';
let operator = '';
let secondValue = false; // A flag to know when to start a new number

buttons.addEventListener('click', (event) => {
    const { target } = event;

    // Check if the clicked element is a button
    if (!target.matches('button')) {
        return;
    }

    const value = target.value;

    // If a number is clicked
    if (!isNaN(value) || value === '.') {
        if (secondValue) {
            display.value = value;
            secondValue = false;
        } else {
            display.value = display.value === '0' ? value : display.value + value;
        }
        return;
    }

    // If an operator is clicked
    if (target.classList.contains('operator')) {
        firstValue = display.value;
        operator = value;
        secondValue = true;
        return;
    }

    // If the equals button is clicked
    if (value === '=') {
        const num1 = parseFloat(firstValue);
        const num2 = parseFloat(display.value);

        if (operator === '+') {
            display.value = num1 + num2;
        } else if (operator === '-') {
            display.value = num1 - num2;
        } else if (operator === '*') {
            display.value = num1 * num2;
        } else if (operator === '/') {
            display.value = num1 / num2;
        }

        firstValue = display.value;
        operator = '';
        secondValue = true;
        return;
    }

    // If the AC button is clicked
    if (value === 'all-clear') {
        display.value = '0';
        firstValue = '';
        operator = '';
        secondValue = false;
    }
});