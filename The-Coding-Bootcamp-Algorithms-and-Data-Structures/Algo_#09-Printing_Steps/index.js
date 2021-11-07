// Iterative Solution (My Version)
function steps(n) {
  for (let i = 1; i <= n; i++) {
    let stair = '';
    stair += '#'.repeat(i);
    stair += ' '.repeat(n-i);

    console.log(stair);
  }
}



module.exports = steps;
