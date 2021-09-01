
function duplicateEncode(word){
  let count = 0;
  word = word.toLowerCase();
  let charArray = word.split('');
  let currentWord = word.split('');
 
  for(let i = 0; i < charArray.length; i++) {
    for(let c of charArray) {
      if(c == charArray[i] ) { ++count;}
      console.log(count);
    
    }
    console.log('char Array = ' + charArray);
    console.log('count of ' + charArray[i] + ' = ' + count);
    if(count == 1) { 
      currentWord[i] = '(';
    } else {
      currentWord[i] = ')';
    }
    console.log('char Array = ' + charArray);
    console.log('CurrentWord = ' + currentWord);
    count = 0;
  }

  return (currentWord.join(''))
}

let print = duplicateEncode('alaiii');
console.log(print);

/************ Unfinished Solution *************/
// console.log('hello');
// function duplicateEncode(word){
//   // ...
//   let count = 0;
//   let charArray = word.split('');
//   console.log(charArray);

//   charArray.foreach((char, index, myWord) => {
//     for(const c of myWord) {
//       if(c == char ) { count++;}
      
//     }
//     if(count == 1) {  char = '(';
//     } else { char = ')'; }
//  })
// }

// let print = duplicateEncode('ali');
// console.log(print);




/******** Other solutions *************/

// function duplicateEncode(word){
//   return word
//     .toLowerCase()
//     .split('')
//     .map( function (a, i, w) {
//       return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//     })
//     .join('');
// }


/******** Other solutions *************/

// function duplicateEncode(word){
   
//   var unique='';
//   word = word.toLowerCase();
//   for(var i=0; i<word.length; i++){
//       if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
//           unique += '(';
//       }
//       else{
//           unique += ')';
//       }
//   }
//   return unique;

// }