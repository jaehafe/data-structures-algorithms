// pseudocode
// 1. function accepts an array and a value
// 2. loop through the array and check if the current array element is
// equal to the value
// 3. if it is, return the index at which the element is found
// 4. if the value is never found, return -1

function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([100], 100));
