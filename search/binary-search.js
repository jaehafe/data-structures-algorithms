// // pseudocode

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

const binarySearch = (arr, elem) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    console.log(start, middle, end);

    if (arr[middle] === elem) {
      return middle;
    } else if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return -1;
};

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 28);
// console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 5));
