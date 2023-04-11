'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function addTwo(num) {
  return num + 2;
}
function getUpper(str) {
  return str.toUpperCase();
}
addTwo(5); // 7
getUpper('new'); // NEW
function signUpUser(name, email, isPaid) {
  console.log('Name: ' + name, 'Email: ' + email, 'isPaid: ' + isPaid);
}
function loginUser(name, email, isPaid) {
  if (isPaid === void 0) {
    isPaid = false;
  }
  console.log('Name: ' + name, 'Email: ' + email, 'isPaid: ' + isPaid);
}
loginUser('nirmal', 'nirm@example.com');
signUpUser('nirmal', 'nirm@example.com', true);
// function getValue(myVal: number): boolean {
//   if (myVal > 5) {
//     return true;
//   }
//   return '200 OK';
// }
// getValue(20);
// const getHello = (s: String): string => {
//   return '';
// };
var heroes = ['Thor', 'Iron Man', 'Spiderman'];
// const heroes = [1, 2, 3];
heroes.map(function (hero) {
  return 'hero is '.concat(hero);
});

function consoleError(errMsg) {
  console.log(errMsg);
}

function handleError(errMsg) {
  throw new Error(errMsg);
}
