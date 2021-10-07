
function displayLargeNumber(n) {
  return [...String(n)].reverse()
          .map( (d, i, arr) => ( (i + 1) % 3 == 0 && i != arr.length - 1) ? d + ',' : d )
          .join('')
          .split('')
          .reverse()
          .join('');
}

// Refactored Version
function displayLargeNumber(n) {
  return [...String(n)].reverse()
         .reduce((prev, current, i, arr) => {
           return ((i + 1) % 3 == 0 && i + 1 != arr.length) ?  ',' + current + prev : current + prev; 
         }, '')
}

// Another Code warrior Solution
function displayLargeNumber(n) {
  return (n+"").replace(/\d(?=(\d{3})+$)/g , x => x+",");
}

// Refactored Version
function displayLargeNumber(n) {
  return (''+n).replace(/.(?=(\d{3})+$)/g,'$&,');
}


