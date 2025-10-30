setTimeout(function () {
  console.log('A');
  setTimeout(function () {
    console.log('B');
    setTimeout(function () {
      console.log('C');
      setTimeout(function () {
        console.log('D');
      }, 0);
    }, 1000);
  }, 2000);
}, 3000);

// A B C D
// Vì các hàm setTimeout được lồng nhau, thực hiện theo thứ tự từ ngoài vào trong với các độ trễ tương ứng:
// Đầu tiên là hàm ngoài cùng với độ trễ 3000ms (in 'A'),
// sau đó hàm bên trong với độ trễ 2000ms (in 'B'),
// tiếp theo hàm bên trong nữa với độ trễ 1000ms (in 'C'),
// và cuối cùng là hàm trong cùng với độ trễ 0ms (in 'D').