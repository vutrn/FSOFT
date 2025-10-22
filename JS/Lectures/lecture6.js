a = 10
console.log(a)

let bigint = 1111111111111111111n
console.log(bigint)
BigInt(bigint)

const sym1 = Symbol(1)
const sym2 = Symbol(2)
console.log(sym1 === sym2)

const arr = [1, 2, 3, 4]

let strObj = new String('hello')
let strStr = 'hello'
console.log(typeof strObj)
console.log(typeof strStr)

let arr1 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
let arr2 = new Array(3).fill([1, 2, 3]);
console.log(arr1)
console.log(arr2)
console.log(typeof arr1)
console.log(typeof arr2)

/* 
  convert string -> array, array -> string
  number -> string, string -> number
  value -> boolean

  array index = key


*/

// string to number
let str = "12a"
let num = Number(str)
let num2 = parseInt(str)
let num3 = parseFloat(str)
console.log(typeof num3)
num
num2
num3

let num4 = 10/0
num4