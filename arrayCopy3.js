// Spread 구문 (Spread Syntax)
// 배열 복사 - 3. Spread 구문 사용 후, 값 추가시

const webPublishing = ['HTML', 'CSS'];
const interactiveWeb = [...webPublishing];

interactiveWeb.push('JavaScript'); // interactiveWeb에 값 추가시 

// push 사용없이, Spread구문 뒤에 값을 넣어서 사용할 수도 있음
// const interactiveWeb = [...webPublishing, 'JavaScript'];

console.log(webPublishing); 
console.log(interactiveWeb); // interactiveWeb에만 추가된다

// </> 실행 결과
// [ 'HTML', 'CSS' ]
// [ 'HTML', 'CSS', 'JavaScript' ]