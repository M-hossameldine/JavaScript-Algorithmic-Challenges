// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// 1st Solution
/*
function reverse(str) {
  return [...str].reverse().join('');
}
*/

// 2nd Solution
/*
function reverse(str) {
  let reversed = '';

  for(let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}
*/

// 3rd Solution
function reverse(str) {
  return [...str].reduce( (rev, char) => char + rev, '');
}

module.exports = reverse;
