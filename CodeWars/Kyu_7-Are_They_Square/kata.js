var isSquare = function(arr){
  if(!arr.length) return undefined;
  return arr.every( n => Number.isInteger(Math.sqrt(n)))
}

// Refactored
var isSquare = function(arr){
  return (!!arr.length) ? arr.every( n => Number.isInteger(Math.sqrt(n))) : undefined;
}
