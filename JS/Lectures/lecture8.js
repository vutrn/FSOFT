//HOF: higher order function
// array method: forEach, map, filter, reduce, find, some, every

const arr = [1, 4, 3, 5, 7]
// forEach: does not return new array,
const forEachArr = arr.forEach((value, index) => {
  console.log(value)
  console.log(index)
})
console.log(forEachArr)
// map: return new array
const doubleArr = arr.map((item, index) => {
  return item * 2
})
console.log(doubleArr)

// filter
const filteredArr = arr.filter((item) => {
  return item > 3
})
console.log(filteredArr)

//find
const findArr = arr.find((item, index) => {
  return item > 3
})
console.log(findArr)

// reduce: 
// [1,2,3,4,5]
let sum = arr.reduce((acc, item, index) => {
  console.log(acc)
  console.log(item)
  return acc + item
})

const reduceAsMap = arr.reduce((acc, item) => {
  // acc.push(item * 2)
  // return acc
  return [...acc, item * 2]
}, [])
console.log(reduceAsMap)

// some: return boolean 
const someArr = arr.some((item,index)=>{
  return item % 2 == 1
})
console.log(someArr)

let objects = [
  {name: 'Alice', age: 25},
  {name: 'Bob', age: 30},
  {name: 'Charlie', age: 35}
]
const obj = objects.reduce((acc, item)=>{ })  