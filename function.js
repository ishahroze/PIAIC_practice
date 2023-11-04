"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//writing function
function add(num) {
    return num + 2;
}
console.log(add(5));
//Arrow functions
let login = (name, email, password) => {
    console.log(`my name is ${name}`);
};
login("shahroz", "pakistan", 1234);
