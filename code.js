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

    operators.forEach(operator => operator.disabled = false);
}))

// Operators ---------------------------------------------------------------------
const operators = document.querySelectorAll('.btn-operator');
operators.forEach(operator => operator.addEventListener('click', function displayOperator() {

    if (displayValue.split(' ').length === 3) {
        calculate();
    }

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

// Calculate ---------------------------------------------------------------------
function calculate() {
    const displayArray = displayValue.split(' ');

    // Get operator from display
    let displayedOperator = displayArray[1];
    let operator = '';
    switch (displayedOperator) {
        case '+':
            operator = add;
            break;
    
        case '-':
            operator = subtract;
            break;

        case 'X':
            operator = multiply;
            break;
        
        case '/':
            operator = divide;
            break;
    }

    // Calculate result
    const num1 = Number(displayArray[0]);
    const num2 = Number(displayArray[2]);
    const result = operate(operator, num1, num2);

    // Display result
    displayValue = result.toString();
    display.textContent = displayValue;

    // Enable operators
    operators.forEach(operator => operator.disabled = false);
}

// Equals -----------------------------------------------------------------------
const equals = document.querySelector('.btn-equals');
equals.addEventListener('click', calculate)

