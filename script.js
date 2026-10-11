

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
            return add(+number1, +number2);
        case "-":
            return subtract(+number1, +number2);
        case "*":
            return multiply(+number1, +number2);
        case "/":
            return divide(+number1, +number2);
        default:
            console.log("Invalid input")
            break;
    }
}

const display = document.querySelector(".display")
const digits = document.querySelectorAll(".number, .operator");
const equal = document.querySelector(".equal")
const clear = document.querySelector(".clear")
let value = [];

console.log(digits)

digits.forEach((digit) => {
    digit.addEventListener("click", (e) => {
        display.textContent += e.target.textContent;
        value.push(e.target.textContent)
        console.log(value)
    })
})



equal.addEventListener("click", () => {
    if(value.length >= 3) {
        let result = operate(value[0], value[1], value[2]);
        display.textContent = result;
        value = [result]
    }
})

clear.addEventListener("click", () => {
    display.textContent = "";
    value = [];
})