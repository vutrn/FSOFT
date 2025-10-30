setTimeout(function () {
  setTimeout(function () {
    console.log('A');
  }, 0);
}, 0);

setTimeout(function () {
  console.log('B');
}, 0);

setTimeout(function () {
  setTimeout(function () {
    console.log('C');
  }, 0);
}, 10);

setTimeout(function () {
  console.log('D');
}, 0);

// B D A C
// because all setTimeout with 0 delay are placed in the task queue and executed after the current call stack is empty,
// so the order is B, D, then A (from the first timeout), and finally C (from the third timeout with 10ms delay).