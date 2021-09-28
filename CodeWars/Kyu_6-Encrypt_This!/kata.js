/*
Encript this!
Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

1. Your message is a string containing space separated words.
2. You need to encrypt each word in the message using the following rules:
  - The first letter must be converted to its ASCII code.
  - The second letter must be switched with the last letter

3. Keepin' it simple: There are no special characters in the input.

Examples:
  encryptThis("Hello") === "72olle"
  encryptThis("good") === "103doo"
  encryptThis("hello world") === "104olle 119drlo"

*/

var encryptThis = function(text) {
  return text.split(' ')
             .map( word => { 
                return  String(word.charCodeAt(0)) + 
                ((word.length < 3) ? word.slice(1) : word.replace(/^\w(\w)(\w*)(\w)$/, `$3$2$1`))
               })
             .join(' ');
}

// Refactored
var encryptThis = function(text) {
  return text
         .split(' ')
         .map( word => word.replace(/^\w(\w)?(\w*)(\w)?$/, `${word.charCodeAt(0)}$3$2$1`))
         .join(' ');
}

// Similar Solution By other code wariors 
var encryptThis = text => text
  .split(' ')
  .map(word => word
  .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
  .replace(/^\w/, word.charCodeAt(0)))
  .join(' ');

console.log(encryptThis("Adc A Ab"));    // -> 65cd 65 65b