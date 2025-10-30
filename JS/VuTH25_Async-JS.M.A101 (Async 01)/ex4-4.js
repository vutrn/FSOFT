var t1 = setTimeout(function () {
  console.log('A');
  setTimeout(function () {
    console.log('B');
  }, 0);
}, 100);

var t2 = setTimeout(function () {
  console.log('C');
  setTimeout(function () {
    console.log('D');
  }, 0);
}, 200);

clearTimeout(t1);

setTimeout(function () {
  clearTimeout(t2);
}, 250); 