function validNumber(num){
  let regex = /^(-|\+)?\d*\.[0-9]{2}$/
  return regex.test(num);
}

console.log(validNumber(".6"));