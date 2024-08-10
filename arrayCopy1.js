// Spread 구문 (Spread Syntax)
// 배열 복사 - 1. 참조형 변수 그대로 복사 후, 값 추가시

const webPublishing = ['HTML', 'CSS'];
const interactiveWeb = webPublishing; // 주소값이 참조되기 때문에

interactiveWeb.push('JavaScript'); // interactiveWeb에 값 추가시 

console.log(webPublishing); // webPublishing에도 추가된다
console.log(interactiveWeb)ㅁ;

// </> 실행 결과
// [ 'HTML', 'CSS', 'JavaScript' ]
// [ 'HTML', 'CSS', 'JavaScript' ]