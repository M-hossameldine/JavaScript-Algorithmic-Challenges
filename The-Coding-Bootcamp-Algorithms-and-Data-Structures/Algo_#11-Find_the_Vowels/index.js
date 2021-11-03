// Simple iteration solution
/*
function vowels(str) {
  let vowelCount = 0;
  let checker = ['a', 'e', 'i', 'o', 'u'];

  str.toLowerCase()
    .split('')
    .forEach( c => {
      if(checker.includes(c)) vowelCount++; 
    });

  return vowelCount;
}
*/

// Regex & match 
/*
function vowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
*/

// Regex & replace
/*
function vowels(str) {
  return (str.replace(/[^aeiou]/gi, '') || '').length;
}
*/

// filter()
/*
function vowels(str) {
  let checker = ['a', 'e', 'i', 'o', 'u'];
  return str.toLowerCase()
    .split('')
    .filter( c => checker.includes(c)).length;
}
*/

module.exports = vowels;
