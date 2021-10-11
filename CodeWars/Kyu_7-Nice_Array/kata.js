function isNice(arr){
  if(arr.length == 0) return false;
  return arr.every( num => arr.includes(num+1) || arr.includes(num-1));
}

// Solution by other code Wariors
function isNice(arr){
  return !!arr.length && arr.every(x => arr.some(y => y === x - 1 ||  y === x + 1));
}



