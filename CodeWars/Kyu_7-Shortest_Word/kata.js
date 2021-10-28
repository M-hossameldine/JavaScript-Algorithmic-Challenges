function findShort(s){
  let words = s.split(' ');
  let shortest = words[0].length;
  words.forEach( (word, i) => {
    if(word.length < shortest) shortest = word.length;
  })

  return shortest;
}

// Solution by other Code Warriors 
function findShort(s){
  return s.split(' ').reduce( (short, word) => (word.length < short) ? word.length : short, Infinity)
}

// Solution inspired by other Code Warriors
function findShort(s){
  return Math.min( ...s.split(' ').map( word => word.length) )
}

// Solution by other code warriors
function findShort(s){
  return Math.min.apply(null, s.split(' ').map( w => w.length))
  // null is not used 
  // return Math.min.apply(Math, s.split(' ').map( w => w.length))
}
