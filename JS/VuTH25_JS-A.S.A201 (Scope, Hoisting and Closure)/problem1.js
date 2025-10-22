function test(){
  console.log(a)
  console.log(foo())

  var a = 1
  function foo(){
    return 2
  }
}
console.log(test())
//output?
// undefined
