// 모던한 프로퍼티 표기법
const title  = '아이두';
const birth = 2024;
const job = '프로그래머'

// 프로퍼티 네임과 변수명이 동일할 경우,
// 하나만 작성해도 정상작동
const user = {
  title,
  birth,
  job,
};

// const user = {
//   title : title,
//   birth : birth,
//   job : job,
// };

console.log(user)

// 실행결과
// { title: '아이두', birth: 2024, job: '프로그래머' }