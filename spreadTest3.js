// Spread 구문 (Spread Syntax)

// 배열+Spread구문 -> 각각의 아규먼트로도 사용가능
const introduce = (name, birth, job) => {
  console.log(`안녕하세요! 반갑습니다.`);
  console.log(`저는 ${name}입니다.`);
  console.log(`${birth}년생이고,`);
  console.log(`직업은 ${job}입니다.`);
  console.log(`잘 부탁드립니다!`);
};

const myArr = ['아이두', 2024, '프로그래머'];
introduce(...myArr);

// 주의: 여러 값이 각각 매칭된 것이지,
// Spread 값이 하나의 값이 될 수는 없다 