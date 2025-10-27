class Vec {
  constructor(x, y) {
    this.x = Number(x);
    this.y = Number(y);
  }

  plus(vec) {
    return new Vec(this.x + vec.x, this.y + vec.y);
  }

  minus(vec) {
    return new Vec(this.x - vec.x, this.y - vec.y);
  }
  
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  
}
const vec1 = new Vec(3,  4);
const vec2 = new Vec(1, 2);

console.log(vec1.plus(vec2));
console.log(vec1.minus(vec2));
console.log(vec1.length);









