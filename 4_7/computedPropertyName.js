// 계산된 속성명(computed property name):
// 표현식을 프로퍼티로 사용할 수 있다
const user = {
    ['Code' + 'it']: 'value',
  };
  
  console.log(user);
  
  // 변수와 함수 값을 프로퍼티로 사용하는 것도 가능하다
  const propertyName = 'birth';
  const getJob = () => 'job';
  
  const codeit = {
    ['topic' + 'Name']: 'Modern JavaScript',
    [propertyName]: 2017,
    [getJob()]: '프로그래밍 강사'
  }
  
  console.log(codeit);