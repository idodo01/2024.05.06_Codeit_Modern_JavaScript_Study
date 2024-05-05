// 'Nullish coalescing operator' - null 병합 연산자 ??
// ES2020에서 새롭게 추가됨
//  

const example1 = null ?? 'I'; // I
const example2 = undefined ?? 'love'; // love
const example3 = 'Codeit' ?? 'JavaScript'; // Codeit

console.log(example1, example2, example3); // I love Codeit
