// Using Iteration
/*
function fib(n) {
  let s = [];
  s[0] = 0;
  s[1] = 1;

  for(let i =2; i <= n ; i++) {
    s[i] = s[i-1] + s[i-2];
  }

  return s[n];
}

*/

// Using Recursion

function memoize(fn) {
  let cache = {};
  
  return function(...args) {
    if(cache[args]) return cache[args];

    // To call a function with an array of arguments we use the "apply" helper
    const result = fn.apply( this, args);  // 
    // const result = fn(...args);
    cache[args] = result;

    return result;
  };
}

function slowFib (n) {
  if(n < 2) return n;

  return fib(n-2) + fib(n-1);
}

const fib = memoize(slowFib);


module.exports = fib;
