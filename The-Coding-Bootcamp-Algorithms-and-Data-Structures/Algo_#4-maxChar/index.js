function maxChar(str) {
  let charMap = {};
  let max = 0;
  let maxChar = '';

  // Set the character Map
  for(let char of str) {
    if(charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  // Find The Max value
  for(let char in charMap) {
    if(charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}


module.exports = maxChar;
