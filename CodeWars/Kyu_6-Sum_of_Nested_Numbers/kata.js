// Solution by other Code Warriors
function sumNestedNumbers(arr, pow = 1) {
  return arr.reduce((p, c) => p +((c.reduce) ? sumNestedNumbers(c, pow + 1) : Math.pow(c, pow)) , 0);
}

