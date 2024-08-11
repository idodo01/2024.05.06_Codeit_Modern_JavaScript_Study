// 모던한 프로퍼티 표기법
const user = {
  firstName: 'Tess',
  lastName: 'Jass',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.getFullName());

// : 와 function 생략가능

// getFullName: function() {
//   return `${this.firstName} ${this.lastName}`;
// },