// forEach와 비슷하게 배열의 요소를 하나씩 살펴보면서 반복 작업을 하는 메소드 입니다. 

// 단, 첫 번째 아규먼트로 전달하는 콜백 함수가 
// 매번 리턴하는 값들을 모아서 
// 새로운 배열을 만들어 리턴하는 특징이 있습니다.

const numbers = [1, 2, 3];
const twiceNumbers = numbers.map((element, index, array) => {
  return element * 2;
});

console.log(twiceNumbers); // (3) [2, 4, 6]
