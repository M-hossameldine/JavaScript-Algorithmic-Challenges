// highAndLow("1 2 3 4 5");  // return "5 1"
function highAndLow(numbers){
  let numberList = numbers.split(' ').map(Number);
  let max = Math.max(...numberList);
  let min = Math.min(...numberList);
  return `${max} ${min}`
}
