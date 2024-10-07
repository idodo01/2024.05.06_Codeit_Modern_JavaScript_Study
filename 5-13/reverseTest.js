// reverse 메소드는 말 그대로 배열의 순서를 뒤집어 주는 메소드 입니다. 
// sort 메소드와 마찬가지로 원본 배열의 요소들을 뒤집어 버린다는 점은 꼭 주의헤야 합니다.

const letters = ['a', 'c', 'b'];
const numbers = [421, 721, 353];

letters.reverse();
numbers.reverse();

console.log(letters); // (3) ["b", "c", "a"]
console.log(numbers); // (3) [353, 721, 421]
