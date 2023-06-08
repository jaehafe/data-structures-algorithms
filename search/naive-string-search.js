// pseudocode
// 1. loop over the longer string
// 2. loop over the shorter string
// 3. if the characters don't match, break out of the inner loop
// 4. if the characters do match, keep doing
// 5. if you complete the inner loop and find a match,
// increment the count of matches.
// 6. return the count

function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      console.log(short[j], long[i + j]);

      if (short[j] !== long[i + j]) {
        console.log('break');
        break;
      }

      if (j === short.length - 1) count++;
    }
  }
  console.log('count=', count);
  return count;
}

naiveSearch('lorie loled lol lol lol', 'lol');
