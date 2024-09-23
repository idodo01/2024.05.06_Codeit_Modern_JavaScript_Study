// Arrow function: 이름없는 익명함수
const getTwice1 = function(number) {
    return number * 2;
  };

// 함수 내용이 한 줄일 경우 
// 중괄호와 return 생략가능
  const getTwice2 = number => nubmer * 2;
  
  console.log(getTwice1(6));
  console.log(getTwice2(6));

// 아래와 같이 
// 함수 내용에서 객체가 포함되어있을 때
// 생략하려고 하면
const getCodeit = () => {
  return { name: 'Codeit', };
};

// 객체의 중괄호를 함수의 중괄호로 
// 인식하여 오류 발생
// const getCodeit2 = () => { name: 'Codeit',};

// 해결방법: 괄호로 감싼다
const getCodeit2 = () => ({ name: 'Codeit',});
