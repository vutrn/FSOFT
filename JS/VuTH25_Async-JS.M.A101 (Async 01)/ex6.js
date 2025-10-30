for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

// 5 5 5 5 5
// vì biến i được khai báo bằng var có phạm vi hàm, không phải phạm vi khối.
// Khi các hàm trong setTimeout được thực thi, vòng lặp đã hoàn thành và i có giá trị là 5.
// Do đó, mỗi hàm trong setTimeout sẽ in ra giá trị 5.