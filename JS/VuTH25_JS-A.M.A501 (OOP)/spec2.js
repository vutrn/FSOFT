class Group {
  constructor() {
    this.members = [];
  }
  
  add(value) {
    if (!this.members.includes(value)) {
      this.members.push(value);
    }
  }
  
  delete(value) {
    this.members = this.members.filter(v => v !== value);
  }
  
  static from(array) {
    const group = new Group();
    for (let value of array) {
      group.add(value);
    }
    return group;
  }

  has(value) {
    return this.members.includes(value);
  }
}

let group = Group.from([1, 2, 3, 4, 5]);
console.log(group.has(1));

group.delete(2);
console.log(group);

group.add(6); 
console.log(group);

console.log(group.has(1));

