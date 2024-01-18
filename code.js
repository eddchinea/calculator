//Operators
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Calculate using operator
function operate(operator, num1, num2) {
    return operator(num1, num2)
}

// Display
const display = document.querySelector('.display');
let displayValue = '';
display.textContent = displayValue;

// Numbers
const numbers = document.querySelectorAll('.btn-number');
numbers.forEach(number => number.addEventListener('click', () => {
    displayValue += number.textContent;
    display.textContent = displayValue;
}))

// Operators
const operators = document.querySelectorAll('.btn-operator');
operators.forEach(operator => operator.addEventListener('click', () => {
    displayValue += ` ${operator.textContent} `;
    display.textContent = displayValue;
}))

// Clear
const clear = document.querySelector('.btn-clear');
clear.addEventListener('click', () => {
    displayValue = '';
    display.textContent = displayValue;
})

