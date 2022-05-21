# Fibonacci series

### Directions

Print out the n-th entry in the Fibonacci series.
The fibonacci series is an ordering of numbers where
each number is the sum of the preceeding two.
For example, the sequence
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
forms the first ten entries of the fibonacci series.

### Example:

```
  fib(4) === 3
```

### Iterative Solution

##### Linear Runtime O(n)

```
  function fib(n) {
    // initialize fibonacci array
    let result = [0, 1];

    // filling array if n > 1
    for (let i = 2; i <= n; i++) {
      const newNum = fibArr[i - 2] + fibArr[i - 1];
      fibArr.push(newNum);
    }

    return result[n];
  }
```

### Recursive Solution

##### Exponential Runtime O(2^n)

```
  function fib(n) {
    if (n < 2) return n;

    return fib(n - 1) + fib(n - 2);
  }
```

### Using Recursion with memoization

- Slow Fib Function -> Memoizer -> Fast, Memoized Fib Function
- We will pass the "Slow Version" to the "Memoizer", the "Memoizer Function" will return a "Fast Memoized Fib version".
- Memoizer(slowFib) -> MemoizedFibFunction

```
  // Generic memoization function
  function memoize(fn) {
  const cache = {};

  return function (...args) {
  if (cache[args]) {
  return cache[args];
  }

      let result = fn.apply(this, args);
      console.log('args', args);
      cache[args] = result;

      return result;

  };
  }

  // usage with fib case
  function slowFib(n) {
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);
  }

  const fib = memoize(slowFib);

```
