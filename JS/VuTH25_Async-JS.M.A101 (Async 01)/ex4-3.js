var x = 'A';

setTimeout(function () {
  console.log(x);
  x = 'B';
}, 3);

setTimeout(function () {
  console.log(x);
  x = 'C';
}, 2);

setTimeout(function () {
  console.log(x);
  x = 'D';
}, 1);

setTimeout(function () {
  console.log(x);
}, 4); 

// A D C B
// because the timeouts are set with different delays, they will execute in the order of their delays:
// first the timeout with 1ms delay (logs 'A' then sets x to 'D'),
// then the timeout with 2ms delay (logs 'D' then sets x to 'C'),
// then the timeout with 3ms delay (logs 'C' then sets x to 'B'),
// and finally the timeout with 4ms delay (logs 'B').