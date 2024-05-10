
// 호이스팅 : 함수 선언보다 호출이 먼저 나왔을 때, 정상작동

// 호이스팅 가능 - 함수 선언
printCodeit();

function printCodeit() {
  console.log('Codeit');
}

// // 호이스팅 불가능 - 함수 표현식

// printCodeit(); // ReferenceError

// const printCodeit = function() {
//   console.log('Codeit');
// }