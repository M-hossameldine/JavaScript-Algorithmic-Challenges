/*
* Vowels Count:
*Return the number (count) of vowels in the given string.
*We will consider a, e, i, o, u as vowels for this Kata (but not y).
*The input string will only consist of lower case letters and/or spaces.
*/

/****************************************************************/
// My Solution
/****************************************************************/

function getCount (string) {
  let vowelsCount = 0;
  let vowelChars = /[aeiou]/g;
  string.split('').forEach( char => {
    if(vowelChars.test(char)) {
      vowelsCount++;
    }
    // To avoid the side effect of using multiple exec call on the same Regular Expression pattern 
    vowelChars.lastIndex = 0;
  })
  return vowelsCount;
}

console.log(getCount("Ciao"));    // ->3

/****************************************************************/
// Another Code Wrrior Solution
/****************************************************************/
function getCount (string) {
  return (string.match(/[aeiou]/g)||[]).length;
}

console.log(getCount("Ciao"));    // ->3
/****************************************************************/