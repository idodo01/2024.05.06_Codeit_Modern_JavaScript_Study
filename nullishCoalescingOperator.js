// null 병합 연산자 (??)
// A ?? B
// null 또는 undefined일 때 B 출력, 아니면 A

const nullTest = null ?? 'null 또는 undefined';

console.log(nullTest);

// 출력 결과
// 'null 또는 undefined'