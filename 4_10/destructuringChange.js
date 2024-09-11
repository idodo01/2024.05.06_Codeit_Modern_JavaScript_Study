// 구조 분해 문법을 사용하여, 간단하게 서로 값 바꾸기 가능
let macbook = '호준';
let ipad = '유나';

console.log("mackbook 당첨자: ", macbook);
console.log("ipad 당첨자: ", ipad);

let temp = macbook;
macbook = ipad;
ipad = temp;

console.log();
console.log("mackbook당첨자: ", macbook);
console.log("ipad 당첨자: ", ipad);


/* <실행결과>
mackbook 당첨자:  호준
ipad 당첨자:  유나

mackbook당첨자:  유나
ipad 당첨자:  호준
 */