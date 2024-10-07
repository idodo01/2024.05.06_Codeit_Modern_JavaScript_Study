// filter 메소드는 배열의 요소를 하나씩 살펴보면서 
// 콜백함수가 리턴하는 조건과 일치하는 요소만 모아서 
// 새로운 배열을 리턴하는 메소드입니다.

const devices = [
    {name: 'GalaxyNote', brand: 'Samsung'},
    {name: 'MacbookPro', brand: 'Apple'},
    {name: 'Gram', brand: 'LG'},
    {name: 'SurfacePro', brand: 'Microsoft'},
    {name: 'ZenBook', brand: 'Asus'},
    {name: 'MacbookAir', brand: 'Apple'},
  ];
  
  const apples = devices.filter((element, index, array) => {
    return element.brand === 'Apple';
  });
  
  console.log(apples); // (2) [{name: "MacbookPro", brand: "Apple"}, {name: "MacbookAir", brand: "Apple"}]