/*
Reverse words: 
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples:
  "This is an example!" ==> "sihT si na !elpmaxe"
  "double  spaces"      ==> "elbuod  secaps"
*/
function reverseWords(str) {
  let words = str.split(' ');
  words.forEach( (word, index, wordArray) => {
    wordArray[index] = word.split('').reverse().join('')
  });
  return words.join(' ')
}


console.log(reverseWords("Ali Papa"));             // -> ilA apaP
console.log(reverseWords("This is an example!"));  // -> siht si na !elpmaxe
console.log(reverseWords("double  spaces"));       // -> elboud secaps

/*************************************************************************/
// Refactored version that is offered by other Code Warriors  
/*************************************************************************/
function reverseWordsTwo(str) {
  return str.split(' ').map( (word) => {
    return word.split('').reverse().join('');
  }).join(' ');
}

console.log(reverseWordsTwo("Ali Papa"));             // -> ilA apaP
console.log(reverseWordsTwo("This is an example!"));  // -> siht si na !elpmaxe
console.log(reverseWordsTwo("double  spaces"));       // -> elboud secaps

