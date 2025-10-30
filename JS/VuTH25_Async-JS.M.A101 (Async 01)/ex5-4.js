setTimeout(function () {
  console.log('A');
  setTimeout(function () {
    console.log('B');
  }, 100);
}, 200);

setTimeout(function () {
  console.log('C');
  setTimeout(function () {
    console.log('D');
  }, 200);
}, 100);

// C A B D
// vì các hàm setTimeout được đặt với các độ trễ khác nhau, chúng sẽ thực thi theo thứ tự độ trễ của chúng:
// Đầu tiên là hàm với độ trễ 100ms (in 'C'),
// sau đó là hàm với độ trễ 200ms (in 'A'),
// tiếp theo là hàm bên trong của 'A' với độ trễ 100ms (in 'B'),
// và cuối cùng là hàm bên trong của 'C' với độ trễ 200ms (in 'D'). 