// 'Nullish coalescing operator' - null 병합 연산자 ??
// ES2020에서 새롭게 추가됨

// OR 연산자와 비슷한 동작처럼 보이지만,
// null 병합 연산자는 null과 undefined 값에만 반응한다.


// 1.
const title1 = null || 'codeit';
const title2 = null ?? 'codeit';

console.log(title1); // codeit
console.log(title2); // codeit

// 2. 

const title3 = false || 'codeit';
const title4 = false ?? 'codeit';

console.log(title3); // codeit
console.log(title4); // false

const width1 = 0 || 150;
const width2 = 0 ?? 150;

console.log(width1); // 150
console.log(width2); // 0
