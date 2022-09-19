
const prompt = require("prompt-sync")({ sigint: true });
exports.printResult = (monotonicChecker, numbersArray) => {
  const isIncement = numbersArray.length - 1 === monotonicChecker;
  const isDecrement = -numbersArray.length + 1 === monotonicChecker;
  isIncement && console.log("Increment Monotonic");
  isDecrement && console.log("Decrement Monotonic");
  !isIncement && !isDecrement && console.log("Is not Monotonic");
};

exports.checkPromptValidate = (num) => {
  const isNan = isNaN(Number(num));
  const isNull = num == null;
  const isEmpty = num.trim() == "";
  const isValid = !isNan && !isNull && !isEmpty;
  return isValid;
};

exports.askNumber = (ordinalList,questionCount) => {
  const ordinalStr = ordinalList[questionCount];
  return enteredNumber = prompt(
    `type "result" to get result,Enter ${ordinalStr} Number `
  );
};

exports.getMonotoisCkecker = (arr) => {
  let monotonicChecker = 0;
  arr.forEach((number, index) => {
    const nextNumber = arr[index + 1];
    number <= nextNumber && monotonicChecker++;
    number > nextNumber && monotonicChecker--;
  });
  return monotonicChecker;
};