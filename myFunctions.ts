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

export {};
