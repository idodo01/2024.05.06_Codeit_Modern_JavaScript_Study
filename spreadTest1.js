// Spread 구문 (Spread Syntax)

const numbers = [1,2,3];

console.log(...numbers);
console.log(1, 2, 3);
 
const sumAll = (...args) => {
  let sum = 0;
  for(arg of args) {
    sum += arg;
  }
  return sum;
}
console.log(sumAll(1,2,3,4));