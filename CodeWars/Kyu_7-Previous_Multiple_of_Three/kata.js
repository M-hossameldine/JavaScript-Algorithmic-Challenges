const prevMultOfThree = n => {
  if (n % 3 == 0) return n;
  if (n < 10 ) return -1;
  console.log("loop");
  return prevMultOfThree(Math.floor(n / 10)); 
}

// Solution by other code warriors
const prevMultOfThree = n => {
  while(n % 3 != 0) {
    if( n < 10) return null;
    n = Math.floor(n / 10);
  }
  return n;
}

