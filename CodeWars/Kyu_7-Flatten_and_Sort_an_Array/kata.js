// [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
"use strict";

function flattenAndSort(array) {
  return array.reduce((prev, current) => [...prev, ...current], [])
              .sort( (a, b) => a-b );
}

// Solution by other Code Wariors
function flattenAndSort(array) {
  return [].concat(...array).sort( (a, b) => a-b);
}




