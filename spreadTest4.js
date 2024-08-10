// Spread 구문 (Spread Syntax)

// Spread 구문 배열을 펼치고
// 다시 중괄호로 감싸서
// 배열 인덱스가 프로퍼티 네임인
// 객체를 만들 수 있다

const member = ['태호', '종훈', '우재'];

const newObject = { ...member };

console.log(newObject);

// 실행결과
// { '0': '태호', '1': '종훈', '2': '우재' }