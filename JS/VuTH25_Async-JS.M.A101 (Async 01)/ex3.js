(function () {
  console.log(1);
  setTimeout(function () { console.log(2) }, 1000);
  setTimeout(function () { console.log(3) }, 0);
  console.log(4);
})(); 
// 1 4 3 2
// because setTimeout with 0 delay will be executed after the current call stack is empty,
// so the order is 1, 4, then the timeout with 0 delay (3), and finally the timeout with 1000ms delay (2).