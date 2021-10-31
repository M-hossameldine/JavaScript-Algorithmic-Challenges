function generateIntegers(n) {
  return Array.from({length: n +1,}, (_, i) => i);
}

// Solution by other Code warriors
function generateIntegers(n) {
  return  [...Array(n +1)].map((_, i) => i);
}

// Solution by other Code warriors
function generateIntegers(n) {
  return  Array(n +1).fill(0).map((_, i) => i);
}

