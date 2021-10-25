
// Solution 1
/*
function palindrome(str) {
  return str == [...str].reverse().join('');
}
*/


// Solution 2
/*
function palindrome(str) {
  let result = '';

  for (let char of str) {
    result = char + result;
  }

  return result == str;
}
*/


// Solution 3
/*
function palindrome(str) {
  return [...str].reduce((rev, char) => char + rev, '') == str

}
*/


// Solution 4
// using every will add unneeded iterations so the normal for loop is better
function palindrome(str) {
  return [...str].every( (char, i) => {
    return  char === str[str.length - i - 1];  
  });
}



module.exports = palindrome;
