function containAllRots(str, arr) {
  let allRoots = Array.from({length: str.length}, ( _ , i) => {
      return str.slice(i) + str.slice(0, i)
    }) 
  return allRoots.every( root => arr.includes(root))
}

// Other Code Warriors Solution
function containAllRots(str, arr) {
  for(let i in str) {
    if(arr.indexOf(str.slice(i) + str.slice(0, i)) == -1) {
      return false;
    }
  }  
  return true;
}
