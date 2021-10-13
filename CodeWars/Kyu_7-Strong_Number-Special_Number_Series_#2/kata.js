// Factorial function with looping
function factorial(num) {
  let fact = 1;
  for(let i =2; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}

// Factorial function with recursion
function factorial(num) {
  if(num <= 1) return 1;
  return num * factorial(num -1);
}

function strong(n) {
  let result = String(n)
                .split('')
                .reduce((p, c) => p + factorial(c), 0);
  
  return result == n ? "STRONG!!!!" : "Not Strong !!";
}

