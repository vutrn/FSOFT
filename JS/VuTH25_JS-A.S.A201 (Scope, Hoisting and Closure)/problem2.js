function someFunction (number) {
  function otherFunction (input) {
    return a
  }

  a = 5

  return otherFunction
}

var firstResult = someFunction(9)
var result = firstResult(2)
console.log(result)
// What is the output? Explain why.
// Output: 5
// Explanation:
// When someFunction is called, it defines otherFunction which returns the variable 'a'.
// The variable 'a' is assigned the value 5 within someFunction, but without a var, let, or const declaration, making it a global variable.
// When firstResult (which is otherFunction) is called, it accesses the global 'a', which has been set to 5.
// Therefore, the output is 5.