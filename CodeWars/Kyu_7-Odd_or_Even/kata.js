function oddOrEven(array) {
  let arraySum = array.reduce( (prev, current) => prev + current ,0);
  return Math.abs(arraySum % 2) != 1 ? "even" : "odd";
}

// Solution by other Code Warriors
function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}