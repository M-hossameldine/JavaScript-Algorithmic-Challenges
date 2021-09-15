/*
Even or Odd:
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

Examples:
  (even_or_odd(2) -> "Even"
  (even_or_odd(7) -> "Odd"
  (even_or_odd(-42) -> "Even"
*/
/**********************************************************/
// My Solution
/**********************************************************/
function even_or_odd(number) {
  return (number % 2) == (1) || (number % 2) == (-1) ? "Odd": "Even";
}

console.log(even_or_odd(2));    // -> Even
console.log(even_or_odd(7));    // -> Odd
console.log(even_or_odd(-42));  // -> Even
console.log(even_or_odd(-9));   // -> Odd

/**********************************************************/
// Another Code Warrior's Solution
/**********************************************************/
function even_or_odd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}

/**********************************************************/
// Another Code Warrior's Solution
/**********************************************************/
// Readability-Wise is not a good solution (not a best practice) but still an interesting solution
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}

/**********************************************************/
