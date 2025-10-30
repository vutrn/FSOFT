console.log("A");
setTimeout(function () { console.log("B"); }, 0);
setTimeout(function () { console.log("C"); }, 0)
console.log("D");

// A D B C
// because setTimeout callbacks are placed in the task queue and executed after the current call stack is empty,
// so the order is A, D, then the two timeouts (B and C) in the order they were added.

