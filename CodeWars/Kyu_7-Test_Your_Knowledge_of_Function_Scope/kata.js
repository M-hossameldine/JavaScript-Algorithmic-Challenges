/*
Test your knowledge of function scope:

Write a function that adds from two invocations.

  add(3)(4)  // 7
  add(12)(20) // 32
*/



/* 
Function Currying: 
https://en.wikipedia.org/wiki/Currying
https://medium.com/@harouny/currying-in-javascript-arrow-function-sequence-2a510441215a
*/

function add (a) {
  return function (b) {
    return a + b;
  }
} 

var add = (a) => (b) => a + b;

console.log(add(3)(4));    // -> 7