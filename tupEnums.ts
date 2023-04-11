// const user: (string | number)[] = [1, 'nirmal'];
let user: [string, number, boolean];

user = ['nirmal', 12, true];

let rgb: [number, number, number] = [125, 255, 0.3];

type User = [number, string];

const newUser: User = [112, 'nirmal@gmail.com'];

newUser[1] = 'hc.com';
// newUser.push(true);
