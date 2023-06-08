// pseudocode
// 1. accepts a sorted array and a value
// 2. create left pointer at the start of the array, and a right pointer at the end of the array
// 3.

// const binarySearch = (arr, elem) => {
//   let start = 0;
//   let end = arr.length - 1;
//   let middle = Math.floor((start + end) / 2);

//   while (arr[middle] !== elem && start <= end) {
//     console.log(start, middle, end);
//     if (elem < arr[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }

//     middle = Math.floor(start + end / 2);
//   }
//   console.log(start, middle, end);

//   if (arr[middle] === elem) {
//     return middle;
//   } else {
//     return -1;
//   }
// };

// binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 28);
// console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 5));

// const binarySearch = (arr, elem) => {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start <= end) {
//     let middle = Math.floor((start + end) / 2);

//     console.log(start, middle, end);

//     if (arr[middle] === elem) {
//       return middle;
//     } else if (elem < arr[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//   }

//   return -1;
// };

// binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 28);
// console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 5));

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    console.log(start, middle, end);
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  if (arr[middle] === elem) {
    return middle;
  }

  return -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 13));
