function alogA () {
  setTimeout(function () {
    console.log('A');
  }, 0);
}

function alogB () {
  setTimeout(function () {
    console.log('B');
  }, 0);
}

function alogC () {
  setTimeout(function () {
    console.log('C');
  }, 0);
}

function alogD () {
  setTimeout(function () {
    console.log('D');
  }, 0);
}

alogD(alogA(alogB(alogC())));   

// C B A D
// because each function uses setTimeout with 0 delay, they are all placed in the task queue.
// The order of execution will be determined by the order in which they were called:
// first alogC (logs 'C'), then alogB (logs 'B'), then alogA (logs 'A'), and finally alogD (logs 'D').