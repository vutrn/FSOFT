
// console.log("xin chào, đây là console.log");
// console.warn("day là console.warn");
// console.error("đây là lỗi! ")

// const user = {name: "Ashley", age: 30};
// console.log(user)

// const products = [
//     { id: 1, name: "Laptop", price: 999.99 },
//     { id: 2, name: "Smartphone", price: 499.99 },
//     { id: 3, name: "Tablet", price: 299.99 },
// ];

// console.log(products [0]);

// let userName = "Ashley";
// const birthYear = 1993;
// var isStudent = true;

// userName = "John";  
// isStudent = false;

// console.log(userName);
// console.log(birthYear);
// console.log(isStudent);

// let num1 = 10;
// Number.isInteger(num1);

// console.log(typeof(NaN))

// * Lesson 2: string & array

// console.log("I\"m learning")

let userName = "Ashley";
let age = 30;

let info = `My name is ${userName} and I am ${age} years old.`;

let fruits = ['apple', 'banana', 'cherry'];

let arr = [1, 2, 3, 4, 5];
function modifyArr (arr, value) {
    return arr.push(value)
}
console.log(arr.pop());

let string = 'Hello world, i am vu';
console.log(string.toLowerCase().split(' '));
string.split(' ')
let newStr = string.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log(newStr)

var a = 1
var b = 2
function swap (a, b) {
    var temp;
    a = temp;
    temp = b
    b = a
}
swap(a, b)
console.log(a, b)