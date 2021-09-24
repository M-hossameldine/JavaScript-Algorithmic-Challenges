/*
Fake Binary:
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

*/

// function fakeBin(x){
//   return x.split('').map(char => (Number(char) < 5) ? 0 : 1).join('');
// }

// Another Solution
// function fakeBin(x){
//   return Array.from(x, (char, index) => (Number(char) < 5)? 0 : 1).join('');
// }

// Another Solution
function fakeBin(x){
  return x.replace(/\d/g, d => (d < 5) ? 0 : 1 );
}
console.log(fakeBin("174"));    // -> 010 