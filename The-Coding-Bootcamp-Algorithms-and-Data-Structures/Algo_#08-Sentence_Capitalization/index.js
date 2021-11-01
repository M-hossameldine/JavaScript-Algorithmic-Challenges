// My 1st Solution
/* 
function capitalize(str) {
  return str.replace(/\b(\w)(\w*)/g, (match, g1, g2) => {
    return g1.toUpperCase() + g2;
  })
}
*/

// My 2nd Solution
/*
function capitalize(str) {
  return str
    .split(' ')
    .map( word => word[0].toUpperCase() + word.slice(1))
    .join(' ')
}
*/

// Refactored Version (readable)
/*
function capitalize(str) {
  let words = [];

  for(let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
} 
*/

// Direct Iteration Version
/*
function capitalize(str) {
  let result= str[0].toUpperCase();

  for(let i = 1; i < str.length; i++) {
    let char = str[i];
    if(str[i -1] === ' ') char = char.toUpperCase();
    result += char;
  }

  return result;
}
*/

module.exports = capitalize;
