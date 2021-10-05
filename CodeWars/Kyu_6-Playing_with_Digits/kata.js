
function digPow(n, p){
  let sum = [...String(n)]
            .reduce( (prev, current, index) => Math.pow(current, p + index) + prev , 0)
  let k = sum / n;
  return (sum % n == 0) ? k : -1;
}

