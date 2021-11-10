// Iterative Solution
/*
function pyramid(n) {
  const levelLength = 2 * (n -1) + 1; // max column value
  const midPoint = Math.floor(levelLength / 2);  // center column value

  for(let row = 0; row < n; row++) {
    let level = '';
    
    for(let column = 0; column < levelLength; column++) {
      level += (column >= (midPoint - row) && column <= (midPoint + row)) ? "#" : " ";
    }

    console.log(level);
  }
}
*/

// Recursive Solution
function pyramid(n, row = 0, level ='') {
  // row base case
  if(row === n) {
    return;
  }

  // level base case
  if(level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midPoint = Math.floor((2 * n - 1) / 2);
  let add = (level.length >= (midPoint - row) && level.length <= (midPoint + row)) ? '#' : ' ';

  pyramid(n, row, level + add);
}

module.exports = pyramid;
