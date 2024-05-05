// 심볼(symbol) : 유일한 값
// 기본형 데이터 타입(primitive data type) 중 하나
const user = Symbol('this is a user');

user === 'this is user'; // false
user === 'user'; // false
user === 'Symbol'; // false
user === true; // false
user === false; // false
user === 123; // false
user === 0; // false
user === null; // false
user === undefined; // false

// 유일한 값이기에,
// symbol로 같은 문자열을 담아도 다르다
const symbolA = Symbol('this is Symbol');
const symbolB = Symbol('this is Symbol');

console.log(symbolA === symbolB); // false
