// Functional Addition
/*
Create a function add(n)/Add(n) which returns a function that always adds n to any number

Note for Java: the return type and methods have not been provided to make it a bit more challenging.

  var addOne = add(1);
  addOne(3); // 4

  var addThree = add(3);
  addThree(3); // 6

*/

/* 
Function Currying: 
https://en.wikipedia.org/wiki/Currying
https://medium.com/@harouny/currying-in-javascript-arrow-function-sequence-2a510441215a
*/

var add = n1 => n2 => n1 + n2;

function add (n1) {
  return function (n2) {
    return n1 + n2;
  }
}

console.log(add(3)(1)); // -> 4
