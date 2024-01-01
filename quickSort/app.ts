const quickSort = (arr: number[]): number[] => {
  // array with 2 elements is already sorted
  if (arr.length < 2) return arr;
  //pivot is middle element of array
  const pivot = arr[Math.floor(arr.length / 2)];
  const less: number[] = [];
  const greater: number[] = [];
  const equal: number[] = [];

  for (const element of arr) {
    if (element < pivot) less.push(element);
    if (element > pivot) greater.push(element);
    if (element == pivot) equal.push(element);
  }

  // sort  less numbers arr  equal numbers arr   greater numbers arr
  return [...quickSort(less), ...equal, ...quickSort(greater)];
};

const arr = [1, 6, 2, 7, 3, 8, 4, 9, 6, 10];
const sortedArray: number[] = quickSort(arr);
console.log(sortedArray);
