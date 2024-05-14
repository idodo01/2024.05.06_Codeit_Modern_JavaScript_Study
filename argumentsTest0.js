function printArguments1(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}


printArguments1("나는", "아이두", "입니다");
printArguments1("나는");
printArguments1("나는", "아이두", "입니다", "안녕하세요");

// 1. 파라미터 수 = 아구먼트 수
// 나는
// 아이두
// 입니다

// 2. 파라미터 수 > 아구먼트 수
// 나는
// undefined
// undefined

// 3. 파라미터 수 < 아구먼트 수
// 나는
// 아이두
// 입니다

// 안녕하세요는 출력 안됨

console.log('-------------------------');
// <해결 방법>
function printArguments2(a, b, c) {
  for(const arg of arguments) {
    console.log(arg);
  }
}

printArguments2("나는", "아이두", "입니다");
printArguments2("나는");
printArguments2("나는", "아이두", "입니다", "안녕하세요");


// 나는
// 아이두
// 입니다

// 나는

// 나는
// 아이두
// 입니다
// 안녕하세요