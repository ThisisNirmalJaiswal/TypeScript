function addTwo(num: number) {
  return num + 2;
}

function getUpper(str: string) {
  return str.toUpperCase();
}
addTwo(5); // 7
getUpper('new'); // NEW

function signUpUser(name: String, email: string, isPaid: boolean) {
  console.log('Name: ' + name, 'Email: ' + email, 'isPaid: ' + isPaid);
}

function loginUser(name: String, email: string, isPaid: boolean = false) {
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

const heroes = ['Thor', 'Iron Man', 'Spiderman'];

// const heroes = [1, 2, 3];

heroes.map((hero) => {
  return `hero is ${hero}`;
});

function consoleError(errMsg: string): void {
  console.log(errMsg);
}

function handleError(errMsg: string): never {
  throw new Error(errMsg);
}

export {};
