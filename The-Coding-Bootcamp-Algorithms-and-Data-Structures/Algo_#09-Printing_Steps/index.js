// Iterative Solution (My Version)
function steps(n) {
  for (let i = 1; i <= n; i++) {
    let stair = '';
    stair += '#'.repeat(i);
    stair += ' '.repeat(n-i);

    console.log(stair);
  }
}

// Iterative Solution (Basic Version)
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';
    
    for(let column = 0; column < n; column++) {
      if(column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    
    console.log(stair);
  }
}

// Iterative refactored version with recursion
function steps(n, row = 1) {
  let stair = '#'.repeat(row) + ' '.repeat(n - row);
  
  console.log(stair);
  if(row == n) return;
  steps(n, ++row)
}

// Recursive Version
function steps(n, row = 0, stair = '') {
  if(n === row) {
    return;
  }

  if(stair.length === n) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = (stair.length <= row) ? '#' : ' ';
  steps(n, row, stair + add);
}

module.exports = steps;
