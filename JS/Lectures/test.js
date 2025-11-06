{
  const arr = [1, 2, 3];

  const x = arr.forEach(n => n * 2);
  console.log(x); // ❌ undefined

  const y = arr.map(n => n * 2);
  console.log(y); // 

  console.log(...arr);


  console.log(c);
  var c = 30;
  let d = 40;
  d = 50;
  console.log(50)

  class Test {
    constructor() {
      this.a = 10;
      this.b = 20;
    }

    sum () {
      return this.a + this.b;
    }
  }

  class SubTest extends Test {
    constructor() {
      super();
      this.c = 30;
    }

    get sum () {
      super.sum();
    }
  }
  // console.log(arrow)
  // console.log(arrow2)
  const arrow = () => {
    console.log(this);
  }
  function arrow2 () {
    console.log(a11)
    var a11 = 1;
    let b1 = 1;
    console.log(this);
  }
  // console.log(a11)
  // console.log(b1)



  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
  }
  // 3,3,3
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
  }
  // 0,1,2

  //every, some
  const nums = [1, 2, 3, 4, 5, 7];
  const result = nums.every(n => n < 6);
  const someResult = nums.some(n => n > 3);
  console.log(result);

  console.log(someResult);

  // reduce 
  const total = nums.reduce((acc, curr) => {
    console.log(acc)
    console.log(curr)
    return acc + curr
  }, 0);
  console.log(total);

  //filter true/false
  const filtered = nums.filter(n => n % 2 === 0);
  console.log(filtered);


  class Animal {
    speak () { console.log('...'); }
  }
  class Dog extends Animal {
    speak () {
      super.speak();
      console.log('Woof!');
    }
  }
  const animal = new Animal();
  animal.speak(); // ...
  const dog = new Dog();
  dog.speak(); // ... Woof!

  // say(); // ❌ lỗi
  // var say = () => console.log('Hi');

  function User (name, age) {
    this.name = name;
    this.age = age;
  }
  User('Alice', 30);
  console.log(User)


  function greet (a, b) {
    console.log(this.name, a, b);
  }
  const user = { name: 'Vũ' };
  greet.call(user, 'hi', 'you'); // tách từng tham số
  greet.apply(user, ['hi', 'you']); // mảng tham số

  class Person {
    #name = 'Vũ';
    // method thông thường
    sayHello () {
      console.log(`Hello, ${this.#name}`);
    }
  }

  class Student extends Person {
    constructor(name) {
      super();
      this.name = name;
    }


  }
  const student = new Student();
  student.sayHello();

  const [a, b] = [1];
  console.log(b); // undefined
  console.log(a); // 1



  const e = { name: 'Vu', age: 20, address: { house: 1 } };
  const f = { age: 21, city: 'HN', address: { house: 2 } };
  const merged = { ...e, ...f };
  console.log(merged); // { name: 'Vu', age: 21, city: 'HN' }

  const arr1 = [1, 2, 3]
  arr1[0] = 10
  console.log(arr1)

  const person = { name: 'Vu', info: { age: 21 } };
  const clone = { ...person };
  clone.info.age = 30;
  console.log(person.info.age); // 30 😨

  // filter
  const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  const filteredUsers = users.filter(user => {
    user.age > 28
  });
  console.log(filteredUsers); 


  var qw = 100;
  var qw = 200;
  console.log(qw)


  for(i = 0; i < 3; i++) {
    var aa = 1;
    let bb = 2;
    const cc = 3;
  }
  console.log(aa);
  // console.log(bb);
  // console.log(cc);


}


