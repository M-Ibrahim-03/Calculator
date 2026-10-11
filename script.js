

// Functions for each basic calculator function

// Adding two numbers
function add(a, b) {
    return a+b;
}

// Subtracting two numbers
function subtract(a, b) {
    return a-b;
}

// Multiply two numbers
function multiply(a, b) {
    return a*b;
}

// Divide two numbers
function divide(a, b) {
    return a/b;
}

let number1;
let operator;
let number2;


function operate(number1, operator, number2) {
    switch (operator) {
        case "+":
            return add(number1, number2);
        case "-":
            return subtract(number1, number2);
        case "*":
            return multiply(number1, number2);
        case "/":
            return divide(number1, number2);
        default:
            console.log("Invalid input")
            break;
    }
}