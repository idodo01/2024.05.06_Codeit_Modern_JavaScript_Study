const numbers = [1, 2, 3, 4];

// reduce
const sumAll = numbers.reduce((accumulator, element, index, array) => {
  return accumulator + element;
}, 0);

console.log(sumAll); // 10
