const snacks = [1, 2, 3, 4, 5];

function printArguments(...args) {
  for (const arg of args) {
    console.log(arg);
  }
}

const mySnacks = [...snacks]
mySnacks.splice(2, 3);  // 인덱스 2부터 3 요소 제거

printArguments(...snacks);
printArguments(...mySnacks);

// 1
// 2
// 3
// 4
// 5
// 1    
// 2