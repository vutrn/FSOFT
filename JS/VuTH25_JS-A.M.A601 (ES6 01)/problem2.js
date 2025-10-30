var x = 2, fns = [];

(function () {
  var x = 5;

  for (var i = 0; i < x; i++) {
    (function (j) {
      fns[j] = function () {
        return j;
      };
    })(i);
  }
})();

// DO NOT MODIFY BELOW CODE 
console.log(x * 2 === fns[x * 2]());
// true
