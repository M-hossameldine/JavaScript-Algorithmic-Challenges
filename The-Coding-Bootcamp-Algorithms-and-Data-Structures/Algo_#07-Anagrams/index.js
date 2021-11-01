// 1st Solution
/*
function buildCharMap(str) {
  let charMap = {}

  for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    if(!charMap[char]) charMap[char] = 1;
    else charMap[char]++; 
  }

  return charMap;
}

function anagrams(stringA, stringB) {
  let mapA = buildCharMap(stringA);
  let mapB = buildCharMap(stringB);
  let result = false;

  if(Object.keys(mapA).length == Object.keys(mapB).length) {
    result = true;
    for(let char in mapA) {
      result = (mapA[char] == mapB[char]) ? result : false;
    }

  }
  console.log(result);
  return result;
}
*/

// 2nd Solution 
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString (str) {
  return str.replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

module.exports = anagrams;
