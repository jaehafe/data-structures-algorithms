// 1. start looping from with a variable called i the end of the array towards the beginning
// 2. start an inner loop with a variable called j from the beginning until i - 1
// 3. if arr[j] is greater than arr[j + 1], swap those two values
// 4. return the sorted array

const arr = [6, 4, 15, 10];

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       console.log(arr, 'i=', [i], 'j=', [j]);

//       if (arr[j] > arr[j + 1]) {
//         // swap
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }

//   return arr;
// }

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      // console.log(arr, 'i=', [i], 'j=', [j]);

      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      console.log(arr, 'i=', [i], 'j=', [j]);
    }
    console.log('one pass complete');
  }

  return arr;
}

bubbleSort([37, 45, 29, 8, 12, 88, -3]);
