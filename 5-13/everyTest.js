// every 메소드는 배열 안에 콜백 함수가 리턴하는 조건을 
// 만족하지 않는 요소가 1개 이상 있는지를 확인하는 메소드 입니다.

// 만족하지 않는 요소가 등장한다면 
// 바로 false를 리턴하고 반복을 종료합니다.

const numbers = [1, 3, 5, 7, 9];

// every: 조건을 만족하지 않는 요소가 1개 이상 있는지
const everyReturn = numbers.every((element, index, array) => {
  console.log(index); // 콘솔에는 0까지만 출력됨.
  return element > 5;
});

console.log(everyReturn); // false;
