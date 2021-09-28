/*
Sort the Vowels!
In this kata, we want to sort the vowels in a special format.

Task:
Write a function which takes a input string s and return a string in the following way:

*/

function sortVowels(s){
  if(typeof s != 'string') return '';
  let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  return s.split('')
          .map( (c) => (vowels.includes(c)) ? `|${c}\n` : `${c}|\n` )
          .join('')
          .replace(/\n$/, '');
}

// Another Solution
function sortVowels(s){
  if(typeof s != 'string') return '';
  return [...s].map( c => c.match(/[aeiou]/i) ? `|${c}`: `${c}|` )
               .join('\n')
               .replace(/\n$/, '');
}
