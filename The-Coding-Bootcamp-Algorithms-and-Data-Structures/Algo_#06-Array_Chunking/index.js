

function chunk(array, size) {
  let chunks = [];
  for(let el of array) {
     const lastEl = chunks[chunks.length - 1];
     if(!lastEl || lastEl.length == size) {
        chunks.push([el]);
     }else {
        lastEl.push(el);
     }
  }
  return chunks;
}

module.exports = chunk;
