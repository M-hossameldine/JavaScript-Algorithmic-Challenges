/*
Mobile Display Keystrokes:
Do you remember the old mobile display keyboards? Do you also remember how inconvenient it was to write on it?
Well, here you have to calculate how much keystrokes you have to do for a specific word.

This is the layout:
1         2 abc    3 def
4 ghi     3 jkl    6 mno
7 pqrs    8 tuv    9 wxyz
*         0        #

Return the amount of keystrokes of input str (! only letters, digits and special characters in lowercase included in layout without whitespaces !)

Examples
mobileKeyboard("*#") => 2 (1+1)
mobileKeyboard("123") => 3 (1+1+1)
mobileKeyboard("abc") => 9 (2+3+4)
mobileKeyboard("codewars") => 26 (4+4+2+3+2+2+4+5)

*/
const charKeystrokes = (char) => {
  if(char == "*" || char == "#") return 1;

  let charSet = "1 2abc 3def 4ghi 3jkl 6mno 7pqrs 8tuv 9wxyz * 0 #";
  let regex = new RegExp(`\\b(\\w)*${char}(\\w)*\\b`, 'i');
 
  return charSet.match(regex)[0].indexOf(char) + 1;
}


function mobileKeyboard(str){
  let totalKeystrokes = 0;
  
  [...str].forEach( char => {
    totalKeystrokes += charKeystrokes(char);;
  });

  return totalKeystrokes;
}

// Another Solution
const map = ['1234567890*#','adgjmptw','behknqux','cfilorvy','sz']

function mobileKeyboard(str){
  return [...str].reduce( (s,c) => s + map.findIndex(l=>l.includes(c)) ,str.length);
}

// Another Solution
function mobileKeyboard(str){
  let counter = 0;
  const keyboard = {
    1: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '*', '#'],
    2: ['a', 'd', 'g', 'j', 'm', 'p', 't', 'w'],
    3: ['b', 'e', 'h', 'k', 'n', 'q', 'u', 'x'],
    4: ['c', 'f', 'i', 'l', 'o', 'r', 'v', 'y'],
    5: ['s', 'z'],
  }

  for (const letter of str) {
    for (const key in keyboard) {
      if (keyboard[key].includes(letter)) {
        counter += +key;
      }
    }
  }

  return counter;
}

console.log(charKeystrokes('b'));
console.log(mobileKeyboard('abc'));
console.log(mobileKeyboard('codewars'));
console.log(mobileKeyboard("#"));
console.log(mobileKeyboard("*"));
console.log(null == null);

console.log(new RegExp('\\*').exec('*'));
// console.log("1 2abc 3def 4ghi 3jkl 6mno 7pqrs 8tuv 9wxyz * 0 #".match(new RegExp(`\\b(\\w)*\\w(\\w)*\\b`, 'i')));