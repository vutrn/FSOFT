'use strict';
// scope: global, function, block
// hoisting
// closure

// declared function
function log () {
  var a = 5
  return function () {
    const b = 10
    console.log(b)
  }
}
// console.log(a)

// var: function scope
// let, const: block scope 

if (true) {
  let x = 1
  {
    let x = 2;
    {
      // let x = 3;1
      {
        console.log(x)
      }
    }
  }
}

//hoisting: variable and function declarations are moved to the top of their scope before code execution

// expression function
const sum = function (a, b) {
  return a + b
}

// closure function

const counter = function (){
  let count = 0;
  return function(){
    return ++count;
  }
}
const result = counter();
console.log(result())
console.log(result())

const manageList = function(){
  const arr = [1,2,3,4]
  return{
    get: ()=>{ return [...arr] },
    add:(value)=>{ arr.push(value)}
  }
}

manageList().add(5)

console.log(a)
var a = 10
