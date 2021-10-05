/*
Display Large Numbers
In some locales (like the US) large numbers are displayed with commas every 3 digits to help users understand the size of the number at a glance.

You're going to write a function to format a number for display in that way.

For example:

displayLargeNumber(1234); // "1,234"
displayLargeNumber(1234567); // "1,234,567"
It should also work for string inputs that contain numbers:

displayLargeNumber("1234"); // "1,234"
This exercise can be great practice for off-by-one errors. For the full benefit, try not to use the test suite too much. Think through your input and iteration carefully instead.

Also, the best practice for this in real life would probably be to use toLocaleString. I can't stop you from "cheating", but the spirit of this task is to do the parsing yourself.

Good luck!
*/

function displayLargeNumber(n) {
  return [...String(n)].reverse()
          .map( (d, i, arr) => ( (i + 1) % 3 == 0 && i != arr.length - 1) ? d + ',' : d )
          .join('')
          .split('')
          .reverse()
          .join('');
}

// Refactored Version
function displayLargeNumber(n) {
  return [...String(n)].reverse()
         .reduce((prev, current, i, arr) => {
           return ((i + 1) % 3 == 0 && i + 1 != arr.length) ?  ',' + current + prev : current + prev; 
         }, '')
}

// Another Code warrior Solution
function displayLargeNumber(n) {
  return (n+"").replace(/\d(?=(\d{3})+$)/g , x => x+",");
}

// Refactored Version
function displayLargeNumber(n) {
  return (''+n).replace(/.(?=(\d{3})+$)/g,'$&,');
}

console.log(displayLargeNumber(124579766));
