// 구조 분해 (Destructuring)
const rank = ['효준', '유나', '민환', '재하', '민수']; // 배열 길이

// 변수
// const macbook = rank[0]; // 효준
// const ipad = rank[1]; // 유나
// const airpods = rank[2]; // 민환
// const coupon = rank[3]; // 재하
const [macbook, ipad, airpods, coupon] = rank;

console.log(macbook);
console.log(ipad);
console.log(airpods);
console.log(coupon);


// 배열 길이 > 변수 개수 일 경우

/* 실행결과
효준
유나
민환
재하
 */