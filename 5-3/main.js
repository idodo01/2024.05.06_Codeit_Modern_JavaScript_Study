const quiz = ['YUMMY', 'COUNT', 'ABUSE', 'SOUND', 'SWING'];

// 여기에 코드를 작성하세요
const answer = quiz.map((q,i,arr)=>{
  return q[i]; // 각각의 요소를 리턴해줘서 새로운 배열을 만들 수 있음
  i++;
})


// 테스트 코드
console.log(answer); // [ 'Y', 'O', 'U', 'N', 'G' ]