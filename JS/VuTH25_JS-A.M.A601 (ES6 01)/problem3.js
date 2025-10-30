function foo (...rest) {
  return rest
 }

function bar () {
  var a1 = [2, 4];
  var a2 = [6, 8, 10, 12];

  return foo(a1[0], ...a2.slice(1));
}

// DO NOT MODIFY BELOW CODE 
console.log(bar().join('') === '281012');
// true