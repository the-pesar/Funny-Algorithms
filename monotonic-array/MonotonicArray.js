const { ordinalList } = require("./data");
const {
  printResult,
  checkPromptValidate,
  askNumber,
  getMonotoisCkecker
} = require("./controllers");

let questionCount = 1;
let promptIsOpen = true;
const numbersArray = [];

while (promptIsOpen) {
  // get number and validate
  const enteredNumber = askNumber(ordinalList, questionCount);
  if (enteredNumber === "result") promptIsOpen = false;
  const isEnteredNumberValid = checkPromptValidate(enteredNumber);
  // adds entered number to list and goes for next question
  isEnteredNumberValid &&
    questionCount++ &&
    numbersArray.push(Number(enteredNumber));
  // in case user wanted more than 19 number program exit to prevent bugs
  if (questionCount === 20) promptIsOpen = false;
}

const monotonicChecker = getMonotoisCkecker(numbersArray);
printResult(monotonicChecker, numbersArray);
