// ES6 Version
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  toString() {
    return `${this.name} is a ${this.type}`;
  }
}

// ES5 Version
function Animal(name, type) {
  this.name = name;
  this.type = type;
}

Animal.prototype.toString = function () {
  return `${this.name} is a ${this.type}`;
}