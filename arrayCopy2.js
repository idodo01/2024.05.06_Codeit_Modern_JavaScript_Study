// Spread 구문 (Spread Syntax)
// 배열 복사 - 2. 참조형변수.slice() 후, 값 추가시

const webPublishing = ['HTML', 'CSS'];
const interactiveWeb = webPublishing.slice();

interactiveWeb.push('JavaScript'); // interactiveWeb에 값 추가시 

console.log(webPublishing); 
console.log(interactiveWeb); // interactiveWeb에만 추가된다

// </> 실행 결과
// [ 'HTML', 'CSS' ]
// [ 'HTML', 'CSS', 'JavaScript' ]