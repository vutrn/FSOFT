// * Object
// * references: object (array), function
// * values: rest (number, string...)

let key

const obj = {
  name: "vu",
  age: 22,
  [key]: 'street',
  getName: function () {
    return this.name;
  },
  getName1() { return this.name },
  address: {
    street: "abc"
  },
  gender: "male"
}

// console.log(obj)
// console.log(obj.name)
// console.log(obj["age"])
// console.log(obj[key])
// console.log(obj.getName())
// obj.name = 'tao';
// console.log(obj.name)

const arr = [1, 2, 3, 4, 5]

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

// forEach
// for of, for in

for (let key in obj) {
  console.log(key)
}

for (let value of Object.values(obj)) {
  // console.log(value)
}

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// while, do while

let i = 0

while (i < 10) {
  // console.log(i)
}

// if

let con = 1;
if (con) {
  console.log(true)
}
else {
  console.log(false)
}

// truthy : rest, [], {}
// falsy: 0, false, "", null, undefined, NaN

console.log(Boolean(1))
console.log(Boolean(null))
console.log(!!undefined)
console.log(!!"string")

const result = null || 10 || '' || 0
// && = AND
// || = OR
console.log(result)

function sum(a, b) {
  console.log(a + b)
  return a + b
}

let sum1 = function (a, b = 0) {
  console.log(a + b)
}
console.log(sum1(1, 2, 3))
// arrow func

let sum2 = (a, b) => {
  return a + b
}
let sum3 = (a, b) => a + b

// dom là gì
// những cách query element dùng dom
// so sanh cac cách
// style elements dùng dom va js
// set attribute
// set content