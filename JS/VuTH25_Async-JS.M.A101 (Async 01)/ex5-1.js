function logA () {
  console.log('A');
}

function logB () {
  console.log('B');
}

function logC () {
  console.log('C');
}

function logD () {
  console.log('D');
}

logD(logA(logB(logC()))); 
// D A B C
// because the functions are called in a nested manner from the innermost to the outermost,
// so logC is called first (logs 'C'), then logB (logs 'B'), then logA (logs 'A'), and finally logD (logs 'D').