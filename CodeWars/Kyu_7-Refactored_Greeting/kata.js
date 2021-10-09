class Person {
  constructor(name) {
    this.name = name;
  }
  greet(friend) {
    return `Hello ${friend}, my name is ${this.name}`;
  }
}

// Another Solution:
function Person (name) {
  this.name = name;
}

Person.prototype.greet = function (friend) {
  return `Hello ${friend}, my name is ${this.name}`;
} 
