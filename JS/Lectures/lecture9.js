// OOPs

class User {
  name;
  age;
  #gender; // private property
  _gender; // protected property
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.#gender = gender;
  }

  getName () {
    return this.name;
  }
  get getName1 () {
    return this.name;
  }

  setName (value) {
    this.name = value;
  }
  set setName1 (value) {
    this.name = value;
  }

  getPrivate () {
    return this.#gender;
  }
}

const user1 = new User('TAO', 22, 'private male')
console.log(user1)
console.log(user1.getPrivate())
console.log(user1.getName())
console.log(user1.setName('VUTH25'))
console.log(user1.getName())
console.log(user1.getName1)
user1.setName1 = 'FEE25'
console.log(user1.getName1)

class Admin extends User {
  role;
  constructor(name, age, role) {
    super(name, age)
    this.role = role;
  }
}

const admin1 = new Admin('ADMIN', 30, 'superadmin')
console.log(admin1.getName())

console.log(user1 instanceof User)
console.log(user1 instanceof Admin)

class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  area () { }
}

class Square extends Shape {
  constructor(x, y) {
    super(x, y)
  }

  area () {
    return x * y;
  }
}

// const circle = new Circle(5, 10);
class Circle extends Shape {
  constructor(x, y) {
    super(x, y)
    super(x)
  }
  area () {
    return Math.PI * x * y;
  }
}

const Student = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// ARROW FUNCTION

class HandleEvent {
  constructor() {
    this.btn = document.querySelector('.pre')
    this.btn.addEventListener('click', this.handleClick.bind(this))
  }

  handleClick () {
    this.implement();
  }
  // handleClick = () => {
  //   this.implement();
  // }

  implement () {
    console.log('click')
  }
}

const btnEvent = new HandleEvent();

const obj = {
  name: 'TAO',
  age: 22,
  getName: () => {
    return this.name;
  },
  getAge: () => {
    return this.age;
  }
}
console.log(obj.getName())
console.log(obj.getAge())

function sum(a,b){

}