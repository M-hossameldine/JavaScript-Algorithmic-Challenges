/*
Exclamation marks series #2: Remove all exclamation marks from the end of sentence:

Description:
Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"

*/

function remove(s){
  s = [...s]
  if(s.slice(-1) == "!") s.pop();
  else return s.join('');
  return remove(s);
}

// Another Solution
function remove(s){
  return s.replace(/!+$/g, '');
}

// Another Solution
function remove (s){
  s = [...s];
  while(s.slice(-1) == "!") {s.pop();}
  return s.join('');
}

// Another Solution
function remove (s){
  while(s.slice(-1) === "!")  s = s.slice(0, -1);
  return s;
}

// Another Solution
function remove (s) {
  while (s && s.endsWith("!")) s = s.slice(0, -1);
  return s;
}

console.log(remove("!Hi! Hi!!!"));    // -> !Hi! Hi
