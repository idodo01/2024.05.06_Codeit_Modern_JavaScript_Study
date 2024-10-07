// find 메소드는 filter 메소드와 비슷하게 동작하지만, 
// 배열의 요소들을 반복하는 중에 콜백함수가 리턴하는 조건과 
// 일치하는 가장 첫번째 요소를 리턴하고 
// 반복을 종료하는 메소드 입니다.

const devices = [
    {name: 'GalaxyNote', brand: 'Samsung'},
    {name: 'MacbookPro', brand: 'Apple'},
    {name: 'Gram', brand: 'LG'},
    {name: 'SurfacePro', brand: 'Microsoft'},
    {name: 'ZenBook', brand: 'Asus'},
    {name: 'MacbookAir', brand: 'Apple'},
  ];
  
  const myLaptop = devices.find((element, index, array) => {
    console.log(index); // 콘솔에는 0, 1, 2까지만 출력됨.
    return element.name === 'Gram';
  });
  
  console.log(myLaptop); // {name: "Gram", brand: "LG"}
  