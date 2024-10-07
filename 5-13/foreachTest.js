// 배열의 요소를 하나씩 살펴보면서 
// 반복 작업을 하는 메소드입니다. 

// forEach 메소드는 첫 번째 아규먼트로 콜백 함수를 전달받는데요. 
// 콜백 함수의 파라미터에는 각각 배열의 요소, index, 메소드를 호출한 배열이 전달됩니다.
// (index와 array는 생략가능)

const numbers = [1, 2, 3];

numbers.forEach((element, index, array) => {
  console.log(element); // 순서대로 콘솔에 1, 2, 3이 한 줄씩 출력됨.
});
