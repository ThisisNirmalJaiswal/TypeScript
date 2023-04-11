"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    if (isPaid === void 0) { isPaid = false; }
    console.log('Name: ' + name, 'Email: ' + email, 'isPaid: ' + isPaid);
}
loginUser('nirmal', 'nirm@example.com');
signUpUser('nirmal', 'nirm@example.com', true);
