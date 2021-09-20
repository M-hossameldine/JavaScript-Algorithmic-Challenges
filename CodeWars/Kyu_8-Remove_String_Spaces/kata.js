/*
Remove String Spaces:
Simple, remove the spaces from the string, then return the resultant string.
*/

function noSpace(x){
  return x.split(' ').join('');
}

// Another Solution
function noSpace(x) {
  return x.replace(/\s/g, '');
}

// Another Solution
function noSpace(x) {
  return x.replace(/ /g, '');
}

// Another Solution
function noSpace(x) {
  return x.replace(/ +/g, '');
}