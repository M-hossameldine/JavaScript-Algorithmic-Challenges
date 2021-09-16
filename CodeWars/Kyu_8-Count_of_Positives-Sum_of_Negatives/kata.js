/*
Count of positives / sum of negatives:
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

function countPositivesSumNegatives(input) {
  if(input == null || input.length == 0) return [];
  return [
    input.filter( number => number > 0).length,
    input.reduce( (preNumber , currentNumber) => (currentNumber < 0)? preNumber + currentNumber: preNumber, 0)
  ]
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));    // -> [10, -65]
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));    // -> [8, -50]
console.log(countPositivesSumNegatives(null));    // -> []
