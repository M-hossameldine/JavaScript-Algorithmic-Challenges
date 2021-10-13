function rowSumOddNumbers(n) {
	let nextOdd = 1;
  let result = 0;
  let rows = Array.from({length: n,} , ( row = [] , rowIndex, arr) => {

    row.length = rowIndex + 1;
    row.fill(''); // to allow looping over row elements

    row.forEach( ( _, columnIndex) => {
      row[columnIndex] = nextOdd;
      nextOdd += 2;
    })
    return row;
  })
 
  result = rows[n -1].reduce( (p, c) => p + c, 0)
  return result;
}

// Refactored Solution
function rowSumOddNumbers(n) {
	let nextOdd = 1;
  let result = 0;
  
  let rows = Array.from({length: n,} , ( row = [] , rowIndex) => {
    row = Array.from({length: rowIndex + 1}, ( _, i) => {
      nextOdd += 2;
      return nextOdd -2;
    })
    return row;
  })

  result = rows[n -1].reduce( (p, c) => p + c, 0)
  return result;
}

// Solution By other code Wriours 
function rowSumOddNumbers(n) {
  return n * n * n;
}

// Solution by other Code Warriors 
function rowSumOddNumbers (n) {
  return Math.pow(n, 3);
}
