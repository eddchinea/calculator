//Logic for calculator ---------------------------------------------------------
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

// Display ---------------------------------------------------------------------
const display = document.querySelector('.display');
let displayValue = '';
display.textContent = displayValue;

// Numbers ---------------------------------------------------------------------
const numbers = document.querySelectorAll('.btn-number');
numbers.forEach(number => number.addEventListener('click', () => {
    displayValue += number.textContent;
    display.textContent = displayValue;

    // Disable operators if displayValue contains an operator
    if (displayValue.includes('+') || displayValue.includes('-') || displayValue.includes('X') || displayValue.includes('/')) {
        operators.forEach(operator => operator.disabled = true);
    } else {
        operators.forEach(operator => operator.disabled = false);
    }
}))

// Operators ---------------------------------------------------------------------
const operators = document.querySelectorAll('.btn-operator');
operators.forEach(operator => operator.addEventListener('click', function displayOperator() {
    displayValue += ` ${operator.textContent} `;
    display.textContent = displayValue;

    // Disable operators if displayValue contains an operator
    operators.forEach(operator => operator.disabled = true);
}))


// Clear -------------------------------------------------------------------------
const clear = document.querySelector('.btn-clear');
clear.addEventListener('click', () => {
    displayValue = '';
    display.textContent = displayValue;

    // Disable operators from displaying at start
    operators.forEach(operator => operator.disabled = true);
})

