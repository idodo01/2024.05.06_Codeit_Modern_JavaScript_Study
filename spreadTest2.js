// Spread 구문 (Spread Syntax)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Spread 구문을 이용하여
// 배열 이어붙이기
const arr3 = [...arr1, ...arr2];
console.log(arr3);

// concat를 이용하여
// 배열 이어붙이기도 가능하지만,
// Spread 구문이 좀 더 직관적이다
const arr4 = arr1.concat(arr2);
console.log(arr4);


// 실행결과 
// [ 1, 2, 3, 4, 5, 6 ]
// [ 1, 2, 3, 4, 5, 6 ]


