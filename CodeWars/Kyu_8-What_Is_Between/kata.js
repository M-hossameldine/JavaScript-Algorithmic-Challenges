/*
What is between?
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:
a = 1
b = 4
--> [1, 2, 3, 4]

*/
/*************************************************************/
// My Solution
/*************************************************************/
function between(a, b){
  let scope = [];
  for (let i = a; i <= b; i++) {
    scope.push(i);
  }
  return scope;
}

console.log(between(1, 8));

/*************************************************************/
// Another Code Warrior Solution
/*************************************************************/
const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i);

/*************************************************************/
// Another Code Warrior Solution
/*************************************************************/
const between = (a, b) =>
  [...Array(b - a + 1)].map((_, idx) => idx + a);
  
/*************************************************************/