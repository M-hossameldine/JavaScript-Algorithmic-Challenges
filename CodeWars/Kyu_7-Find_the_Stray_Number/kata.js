function stray(numbers) {
  let num1 = [];
  let num2 = [];

  numbers.forEach(n => { 
    (n === numbers[0]) ? num1.push(n) : num2.push(n); 
  })

  return num1.length == 1 ? num1[0] : num2[0];
}

// solution by other Code Warriors
function stray(numbers) {
  for(let i in numbers) {
    if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) return numbers[i];
  }
}

// Solution by other Code Warriors
function stray(numbers) {
  return numbers.reduce( (p, c) =>{
    console.log('p', p);
    console.log('c', c);
    console.log(p ^ c);
    return  p ^ c});  // XOR
}

stray([17, 17, 3, 17, 17, 17, 17])