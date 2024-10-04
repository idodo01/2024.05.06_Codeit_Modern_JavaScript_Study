const numbers = []

const someReturn = numbers.some((el, i) => {
  console.log('some: ', i);
  return el > 5;
})

const everyReturn = numbers.every((el, i) => {
  console.log('every: ', i);
  return el > 5;
});

console.log('some return 값:',someReturn); // false
console.log('some return 값:',everyReturn); // true
