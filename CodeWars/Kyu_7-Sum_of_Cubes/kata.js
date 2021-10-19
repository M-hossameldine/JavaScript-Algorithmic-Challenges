function sumCubes(n){
  let sum = 0;
  let i = 1;
  while(i <= n) {
    sum += Math.pow(i, 3);
    i++;
  }
  return sum;
}

// Another Solution
function sumCubes(n){
  if(n == 1) return n;
  return Math.pow(n, 3) + sumCubes(n - 1)
}

// Solution by other Code Warriors
// https://mathschallenge.net/library/number/sum_of_cubes

function sumCubes(n){
  return (n*(n+1)/2)**3;
}

// Solution by other Code warriors
function sumCubes(n){
  return [...Array(n+1).keys()]
            .map( (num, i) => num**3)
            .reduce( (num, total) => num + total , 0);
}



