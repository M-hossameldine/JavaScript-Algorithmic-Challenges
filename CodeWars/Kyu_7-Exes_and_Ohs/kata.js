function XO(str) {
  return (str.match(/x/ig) || []).length == (str.match(/o/ig) || []).length;
}

function XO(str) {
  return str.replace(/[^x]/gi, '').length == str.replace(/[^o]/gi, '').length;
}

// Or (by other code warriors)
function XO(str) {
  return str.replace(/[x]/gi, '').length == str.replace(/[o]/gi, '').length;
}