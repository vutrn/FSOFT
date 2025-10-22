var a = 1;
function b () {
  a = 10;
  return;
  function a () { }
}
b();
console.log(a)
// Output: 1
// Explanation:
// In the function b, there is a function declaration 'function a() {}' which is hoisted to the top of the function scope.
// This means that within the scope of function b, 'a' refers to this inner function, not the global variable 'a'.
// When we assign 'a = 10;', we are actually trying to assign a value to the inner function 'a', which does not affect the global 'a'.
// Therefore, when we log the global 'a' after calling b(), it remains 1.