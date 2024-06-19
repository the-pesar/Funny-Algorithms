const findSmallest = (arr: number[]) => {
  let smallest = arr[0];
  let smallestIndex = 0;
  // O(n)
  for (let i = 0; i < arr.length; i++) {
    //find smallest item
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex; //return smallest item in old array
};

const sortFunc = (oldArray: number[]): number[] => {
  const sotredArray: number[] = []; //new array as sorted array
  const arrLength: number = oldArray.length;
  // O(n)
  for (let i = 0; i < arrLength; i++) {
    const smallest: number = findSmallest(oldArray);
    const deletedIndex: number = oldArray.splice(smallest, 1)[0];
    sotredArray.push(deletedIndex); //push deleted index to new array
  }

  return sotredArray; //return new array
};

const numsArr: number[] = [21, 1, 63, 32, 62, 2, 11, -1];
const sortedArray = sortFunc(numsArr);
console.log(sortedArray);
