/*
Is it a palindrome:
Write a function that checks if a given string (case insensitive) is a palindrome.
(A string is said to be a palindrome if the string read from left to right is equal to the string read from right to left.)
*/

/***********************************************************/
// My Solution
/***********************************************************/
function isPalindrome(x) {
  return x.toLowerCase() === x.toLowerCase().split('').reverse().join('');
}

/***********************************************************/
// Code Warrior: LaPy
/***********************************************************/
// function isPalindrome(x, str = x.toLowerCase()) {
//   return str === [...str].reverse().join('')
// } 
/***********************************************************/
