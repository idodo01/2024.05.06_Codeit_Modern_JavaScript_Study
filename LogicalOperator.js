// AND와 OR의 연산 방식

// 1. AND
// 1번째가 true이면, 2번째 값 리턴
console.log(true && true); // true
console.log(true && false); // false
// 1번째가 false이면, 1번째 값 리턴
console.log(false && true); // false
console.log(false && false); // false

// 1. OR
// 1번째가 true이면, 1번째 값 리턴
console.log(true || true); // true
console.log(true || false); // true
// 1번째가 false이면, 2번째 값 리턴
console.log(false || true); //  true
console.log(false || false); // false

// 값
console.log(null && undefined); // 1번째 값이 false 이기에, 1번째 값(null)
console.log(0 || true); // 1번째 값이 false 이기에, 2번째 값 (true)
console.log('0' && NaN); // 1번째 값이 true이기에, 2번째 값(NaN)
console.log({} || 123); // 1번째 값이 true이기에, 1번째 값({})
