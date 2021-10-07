

var uniqueInOrder = function (iterable){
  if(typeof(iterable) == 'string' ) {
    iterable = iterable.split('');
  }

  for(let i = 0; i < iterable.length;i++) {
    if(iterable[i] === iterable[i+1]) {
     iterable.splice(i, 1);
     i--;
    }
  }
  return iterable;
}

