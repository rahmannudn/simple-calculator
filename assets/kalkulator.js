const btnsNum = document.querySelectorAll(".btn-num");
const body = document.querySelector("body");
const displayNumber = document.getElementById("display-num");
const btnClear = document.querySelector(".btn-clr");
const btnsOperator = document.querySelectorAll(".btn-cmd");
const btnEqual = document.querySelector(".btn-eql");
const dispayOperator = document.querySelector("#operator");
const tesBtn = document.getElementById("test");
const testTxt = document.getElementById("test-text");

const calculator = {
  displayNumber: "0",
  operator: null,
  firstNumber: null,
  waitingForSecondNumber: false,
};

const updateDisplay = function () {
  displayNumber.textContent = calculator.displayNumber;
};

const inputDigit = function (digit) {
  calculator.displayNumber += digit;
};

btnsNum.forEach((btn) =>
  btn.addEventListener("click", function () {
    calculator.displayNumber === "0"
      ? (calculator.displayNumber = "")
      : calculator.displayNumber;
    inputDigit(btn.value);
    updateDisplay();
  })
);

btnsOperator.forEach((op) =>
  op.addEventListener("click", function () {
    calculator.firstNumber = calculator.displayNumber;
    calculator.operator = op.value;
    calculator.waitingForSecondNumber = true;
    calculator.displayNumber = "0";
    dispayOperator.textContent = calculator.operator;
    updateDisplay();
  })
);

btnEqual.addEventListener("click", function () {
  const op = calculator.operator;
  const firstNum = Number(calculator.firstNumber);
  const secondNum = Number(calculator.displayNumber);

  if (calculator.firstNumber === null || calculator === null) {
    return;
  }

  let result = 0;
  if (op === "+") {
    result = firstNum + secondNum;
  }
  if (op === "*") {
    result = firstNum * secondNum;
    displayNumber.textContent = result;
  }
  if (op === "-") {
    result = firstNum - secondNum;
    displayNumber.textContent = result;
  }

  console.log(calculator.displayNumber);

  const history = {
    firstNumber: calculator.firstNumber,
    secondNumber: calculator.displayNumber,
    operator: calculator.operator,
    result: result,
  };

  putHistory(history);
  renderHistory();
  calculator.displayNumber = result;
  dispayOperator.textContent = "";
});

btnClear.addEventListener("click", function () {
  calculator.displayNumber = "0";
  calculator.operator = null;
  calculator.firstNumber = null;
  calculator.waitingForSecondNumber = false;
  updateDisplay();
});

// tesBtn.addEventListener("click", function (event) {
//   const cacheKey = "NUMBER";

//   if (typeof Storage !== "undefined") {
//     // --- session storage
//     // if (sessionStorage.getItem(cacheKey) === "undefined") {
//     //   sessionStorage.setItem(cacheKey, 0);
//     // } else {
//     //   let number = sessionStorage.getItem(cacheKey);
//     //   number++;
//     //   sessionStorage.setItem(cacheKey, number);
//     //   testTxt.textContent = number;
//     // }

//     // --- local storage
//     if (localStorage.getItem(cacheKey) === "undifined") {
//       localStorage.setItem(cacheKey, 0);
//     } else {
//       let number = localStorage.getItem(cacheKey);
//       number++;
//       localStorage.setItem(cacheKey, number);
//       testTxt.textContent = number;
//     }
//   } else {
//     console.log("browser tidak support");
//   }
// });
