// 파라미터에 기본값은 
// 아규먼트를 생략하거나 
// 아규먼트 값이 undefined 인 경우에 사용됩니다.

function introduce(name = '홍길동', birth = 1443) {
  console.log(`안녕하세요 저는 ${name}입니다.`);
  console.log(`${birth}년에 태어났습니다.`);
}

introduce('장동건'); // name '장동건' birth 기본값
introduce('Joy', null); // name 'Joy' birth null  (undefined가 아니기에)
introduce(undefined, 2090); // name 기본값 birth 2090

// 안녕하세요 저는 장동건입니다.
  // 1443년에 태어났습니다.             // 기본값

// 안녕하세요 저는 Joy입니다.
// null년에 태어났습니다.

// 안녕하세요 저는 홍길동입니다.        // 기본값
// 2090년에 태어났습니다.
