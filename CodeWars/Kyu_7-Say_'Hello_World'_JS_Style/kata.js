/*
Say "Hello World" JS Style:
Write the definition of the function "say" such that calling this:

  say("Hello")("World")

returns "Hello World"

*/


/* 
Function Currying: 
https://en.wikipedia.org/wiki/Currying
https://medium.com/@harouny/currying-in-javascript-arrow-function-sequence-2a510441215a
*/

var say = function (str1) {
  return function (str2) {
    return str1 + ' ' + str2;
  }
}

// Another Version with Arrow Function
var say = (str1) => (str2) => str1 + ' ' + str2;
console.log(say ("Hello") ("World"));    // -> Hello World
