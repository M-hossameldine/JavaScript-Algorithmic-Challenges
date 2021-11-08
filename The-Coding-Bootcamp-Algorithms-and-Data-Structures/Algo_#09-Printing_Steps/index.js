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

module.exports = steps;
