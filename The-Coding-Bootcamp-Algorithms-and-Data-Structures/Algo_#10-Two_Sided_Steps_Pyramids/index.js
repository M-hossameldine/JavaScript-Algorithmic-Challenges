// Iterative Solution
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

module.exports = pyramid;
