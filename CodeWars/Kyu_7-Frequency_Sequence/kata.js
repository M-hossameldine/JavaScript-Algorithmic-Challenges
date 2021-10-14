function freqSeq(str, sep) {
  if(!str.length) return '';
  let result = '';
  let charMap = new Map();  
  
  [...str].forEach( char => {
    if(!charMap.has(char)) charMap.set(char, 0);
    charMap.set(char, charMap.get(char) + 1);
  });

  result = str.split('')
              .map( char => charMap.get(char))
              .join(sep);
  
  return result;
}

// Solution by other code warriors
function freqSeq(str, sep) {
  return str.split('')
            .map((char, i, arr) => arr.filter( c => c === char).length)
            .join(sep);
}
