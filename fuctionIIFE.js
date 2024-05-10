// 즉시 실행 함수 
// IIFE(이피): Immediately Invoked Function Expression
(function () {
  console.log('Hi!');
})();

(function (x, y) {
  console.log(x + y);
})(3, 5);

// 이름있는 함수 표현식은
// 주로 재귀함수로 사용됨
(function countdown(n) {
  console.log(n);
  if (n === 0) {
    console.log('End!');
  } else {
    countdown(n - 1);
  }
})(2);

// 외부에서 재사용은 불가함
// (function sayHi() {
//   console.log('Hi!');
// })();
// sayHi(); // ReferenceError

//  활용
// -> 함수 리턴값을 바로 변수로 할당하는
// 일회성 동작에 사용 
const firstName = 'Young';
const lastName = 'Kang';

const greetingMessage = (function () {
  const fullName = `${firstName} ${lastName} `;

  return `Hi! My name is ${fullName}`;
})();

