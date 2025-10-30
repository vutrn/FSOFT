// ES6: ECMA Script
// Scope, let vs const, arrow function, this, destructuring, rest vs spread, tag function

// destructuring
const arr = [1, 2, 5, 7, 9, 10]
const arr1 = [3, 6, 2]
// arr.unshift(11)
//spread -> shallow copy
// [30, ...arr]
console.log(arr.concat(arr1))
console.log([...arr, ...arr1])
const [a, b, ...c] = arr

console.log(a)
console.log(b)
console.log(c)

const obj10 = {
  name: 'hihi',
  age: 30,
  gender: 'female',
  address: {
    name: 'abc'
  }
}


const { age,  t,...rest } = obj10;
console.log(age)
console.log(t)
console.log(rest)

function logList (...rest) {
  console.log(rest)
}
logList(1, 2, 3)

const newObj = {...obj10, name: 'haha'}
console.log(newObj.name)
console.log(newObj.age)

const obj1 = {
  name: 'obj1',
  getName(){
    return this.name;
  }
}

const obj2= {
  name: 'obj2',
  getName(){
    return this.name;
  }
}
console.log(obj1.getName.bind(obj2)())

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

const nums = [1, 2, 3, 4];
console.log(sum(...nums));