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

  return [str.slice(0, lastIndex), str.slice(lastIndex + symbol.length)];
}

const display = document.querySelector(".display");
const digits = document.querySelectorAll(".number, .operator");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const operatorVar = document.querySelectorAll(".operator");
const decimal = document.querySelector(".decimal");
const backspace = document.querySelector(".backspace");
let value = "";
let equalled = false; // boolean to check if equal has been pressed

const handleOperatorClick = (e) => {
  console.log(value);
  console.log(operator);
  decimal.disabled = false;
  if (operator.length >= 1) {
    console.log(e.target.textContent);
    let digitArray = splitOnLastOccurrence(value, operator);
    console.log(digitArray);
    number1 = +digitArray[0];
    number2 = +digitArray[1];
    let result = operate(number1, operator, number2);
    value = result;
    operator = e.target.textContent;
  } else {
    operator = e.target.textContent;
  }
};

const handleBackspaceClick = () => {
  console.log(value);
  text = display.textContent;
  text = text.slice(0, -1);
  display.textContent = text;
  value = text;

  // let digitArray = splitOnLastOccurrence(value, operator);
  // console.log(digitArray);
  // number1 = +digitArray[0];
  // number2 = +digitArray[1];
  // let result = operate(number1, operator, number2);
  // value = result;
};

const handleDecimalClick = () => {
  decimal.disabled = true;
};

const handleDigitClick = (e) => {
  if (equalled) {
    display.textContent = "";
    value = "";
    operator = "";
    equalled = false;
  }
  display.textContent += e.target.textContent;
  value += e.target.textContent;
  console.log(value);
};

const handleEqualClick = () => {
  console.log(value)
  if (value.length >= 3) {
    let digitArray = splitOnLastOccurrence(value, operator);
    console.log(digitArray);
    number1 = +digitArray[0];
    number2 = +digitArray[1];
    if (operator === "/" && number2 == 0) {
      alert("Cannot divide by zero!");
      display.textContent = "";
      value = "";
      operator = "";
      return;
    }
    let result = operate(number1, operator, number2);
    result = String(result).split(".")[1] > 10 ? result.toFixed(2) : result;
    display.textContent = result;
    value = result;
    operator = "";
    equalled = true;
    decimal.disabled = false;
  }
  else display.textContent = value
};

// Event Listeners
backspace.addEventListener("click", handleBackspaceClick);

operatorVar.forEach((op) => {
  op.addEventListener("click", handleOperatorClick);
});

decimal.addEventListener("click", handleDecimalClick);

digits.forEach((digit) => {
  digit.addEventListener("click", handleDigitClick);
});

equal.addEventListener("click", handleEqualClick);

clear.addEventListener("click", () => {
  display.textContent = "";
  value = "";
  operator = "";
  decimal.disabled = false;
});

const calculatorKeys = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
  "+",
  "-",
  "*",
  "/",
  "=",
  "Enter",
  "Backspace",
];

digitArr = [];
digits.forEach((digit) => digitArr.push(digit.textContent));

operatorArr = [];
operatorVar.forEach((op) => operatorArr.push(op.textContent));

window.addEventListener("keydown", (e) => {
  if (!calculatorKeys.includes(e.key)) return;

  e.preventDefault();

  if (operatorArr.includes(e.key)) {
    operatorVar.forEach((op) => {
      if (op.textContent == e.key) {
        op.click();
      }
    });
  } else if (digitArr.includes(e.key)) {
    digits.forEach((digit) => {
      if (digit.textContent == e.key) {
        digit.click();
      }
    });
  }

  if (e.key == "Enter" || e.key === "=") {
    handleEqualClick();
  }

  if (e.key == ".") handleDecimalClick();

  if (e.key == "Backspace") handleBackspaceClick();
});

//  (() => {
//       console.log("pressed")
//       console.log(value);
//       console.log(operator);
//       decimal.disabled = false;
//       if (operator.length >= 1) {
//         console.log(e.key);
//         let digitArray = splitOnLastOccurrence(value, operator);
//         console.log(digitArray);
//         number1 = +digitArray[0];
//         number2 = +digitArray[1];
//         let result = operate(number1, operator, number2);
//         console.log(result);
//         value = result;
//         console.log(value);
//         operator = e.key;
//       } else {
//         operator = e.key;
//       }
//     })
