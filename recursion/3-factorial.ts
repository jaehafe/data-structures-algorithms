// function factorial(num) {
//   let total = 1;

//   for (let i = num; i > 0; i--) {
//     total *= i;
//   }

//   return total;
// }

function factorialSum(num: number): number {
  let total = 0;
  for (let i = 0; i <= num; i++) {
    total += i;
  }
  return total;
}

// factorial(5);
// console.log(factorial(5));

console.log(factorialSum(5));

// 반복문 사용
