// 구조 분해 (Destructuring)
const rank = ['효준', '유나', '민환', '재하']; // 배열 길이

// 변수
// const macbook = rank[0]; // 효준
// const ipad = rank[1]; // 유나
// const airpods = rank[2]; // 민환
// const coupon = rank[3]; // 재하
const [macbook, ipad, airpods, coupon, tv = "없음"] = rank;

console.log(macbook);
console.log(ipad);
console.log(airpods);
console.log(coupon);
console.log(tv);


// 배열 길이 < 변수 개수 일 경우 + 남는 변수에 기본 값 할당

/* 실행결과
효준
유나
민환
재하
undefined
 */