var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n));
}

// Solution by other code warriors
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}
