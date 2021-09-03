/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/
function XO(str) {
  let ourString = str.toUpperCase().split('');
  let xNum = 0, yNum = 0;
  for( let i = 0; i <= ourString.length; i++) {
    const c = ourString[i];
    if(c == 'X') {
      ++xNum;
    } else if(c == 'O') {
      ++yNum;
    }
  }
  console.log('xNum = ' + xNum + ' yNum = ' + yNum);
  console.log(ourString);
  if(xNum == yNum && xNum > 0) {
    console.log('true');
    return true;
  } 
  else {  
    console.log('false');
    return false;
  }
}

XO('alox');

/* Other Solutions*/

// const XO = str => {
//   str = str.toLowerCase().split('');
//   return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
// }

// function XO(str) {
//   return str.replace(/o/ig, '').length == str.replace(/x/ig, '').length
// }
