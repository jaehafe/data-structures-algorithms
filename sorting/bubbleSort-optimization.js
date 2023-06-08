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

// Optimized with noSwaps
function bubbleSort(arr) {
  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);

      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }

      // console.log(arr, arr[i], arr[j + 1]);
    }

    console.log('one pass complete');

    if (noSwaps) {
      console.log('break!!');
      break;
    }
  }

  return arr;
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
