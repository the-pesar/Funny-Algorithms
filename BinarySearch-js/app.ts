const arr: string[] = require("./data");

const binarySearch = (target: string, start: number, end: number): unknown => {
  if (start > end) {
    return "not found";
  }

  const middle = Math.floor((start + end) / 2);
  console.log(middle);

  if (arr[middle] === target) {
    return `I found your character at the ${
      middle + 1
    }th index of the alphabet.`;
  }

  if (arr[middle] > target) {
    return binarySearch(target, start, middle - 1);
  }

  if (arr[middle] < target) {
    return binarySearch(target, start + 1, end);
  }
};

console.log(binarySearch("n", 0, arr.length - 1));
