// Functions for each basic calculator function

// Adding two numbers
function add(a, b) {
  return a + b;
}

// Subtracting two numbers
function subtract(a, b) {
  return a - b;
}

// Multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Divide two numbers
function divide(a, b) {
  return a / b;
}

let number1;
let operator = "";
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
      console.log("Invalid input");
      break;
  }
}

function splitOnLastOccurrence(str, symbol) {
  if (!symbol) return [str];

  const lastIndex = str.lastIndexOf(symbol);

  if (lastIndex === -1) {
    return [str];
  }

  return [
    str.slice(0, lastIndex), 
    str.slice(lastIndex + symbol.length) 
  ];
}

const display = document.querySelector(".display");
const digits = document.querySelectorAll(".number, .operator");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const operatorVar = document.querySelectorAll(".operator");
let value = "";

operatorVar.forEach((op) => {
  op.addEventListener("click", (e) => {
    console.log(value);
    console.log(operator);
    if (operator.length >= 1) {
      console.log(e.target.textContent);
      let digitArray = splitOnLastOccurrence(value, operator);
      console.log(digitArray)
      number1 = +digitArray[0];
      number2 = +digitArray[1];
      let result = operate(number1, operator, number2);
      console.log(result)
      value = result;
      console.log(value)
      operator = e.target.textContent;
    } else {
      operator = e.target.textContent;
    }
  });
});

digits.forEach((digit) => {
  digit.addEventListener("click", (e) => {
    display.textContent += e.target.textContent;
    value += e.target.textContent;
    console.log(value)
  });
});



equal.addEventListener("click", (e) => {
  if (value.length >= 3) {
    // console.log(e.target.textContent)
    let digitArray = splitOnLastOccurrence(value, operator);
    console.log(digitArray) 
    number1 = +digitArray[0];
    number2 = +digitArray[1];
    let result = operate(number1, operator, number2);
    display.textContent = result;
    value = result;
    operator = "";
  }
});

clear.addEventListener("click", () => {
  display.textContent = "";
  value = "";
  operator = "";
});
