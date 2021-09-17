/*
Hex to Decimal:
Complete the function which converts hex number (given as a string) to a decimal number.
*/

let hexMap = new Map([ ['A', 10], ['B', 11], ['C', 12], ['D', 13], ['E', 14], ['F', 15] ]);

let red = (prev, current, index) => {
  current = current.toUpperCase();
  if(hexMap.has(current)) {
    current = hexMap.get(current);
  }
  return prev + current * Math.pow(16, index)
}

function hexToDec(hexString){
  let decimal = hexString.replace(/-(.+)/, "$1").split('').reverse().reduce(red, 0);
  return hexString[0] == "-" ? -1 * decimal : decimal;
}

console.log(hexToDec("1"));    // -> 1
console.log(hexToDec("a"));    // -> 10 
console.log(hexToDec("10"));   // -> 16 
console.log(hexToDec("FF"));   // -> 255
console.log(hexToDec("-C"));   // -> -12 

// Another Solution 
function hexToDec(hexString){
  return  parseInt(hexString, 16);
}

