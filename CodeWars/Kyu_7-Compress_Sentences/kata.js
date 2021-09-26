/*
Compress Sentences:
Your task is to make a program takes in a sentence (without puncuation), adds all words to a list and returns the sentence as a string which is the positions of the word in the list. Casing should not matter too.

Example
"Ask not what your COUNTRY can do for you ASK WHAT YOU CAN DO FOR YOUR country"
becomes "01234567802856734"

Another example
"the one bumble bee one bumble the bee"
becomes "01231203"
*/

function compress(sentence) {
  const words = sentence.toLowerCase().split(' ');
  let SentenceMap = new Map (Array.from(new Set(words), (word, index) => [word, index]));
  return words.reduce( (prev, current) => prev + SentenceMap.get(current) , '');
}
console.log(compress("the one bumble bee one bumble the bee"));    // ->"01231203"
console.log(compress("SILLY LITTLE BOYS silly little boys"));       // -> "012012"

