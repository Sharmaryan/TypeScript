"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
function getNameInUpperCase(name) {
    return name.toUpperCase();
}
function signUpUser(name, email, password) {
}
function login(name, email, password) {
    if (password === void 0) { password = 123; }
}
login('aryan', 'aryan@gmail.com');
signUpUser('aryan', 'aryan@gmail.com', 123);
getNameInUpperCase('aryan');
addTwo(2);
