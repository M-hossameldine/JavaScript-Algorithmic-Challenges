function rowWeights(array){
  let teamOne = array.filter( (_, i) => (i + 1)%2 == 1 ).reduce((a, b) => a+b , 0);
  let teamTwo = array.filter( (_, i) => (i + 1)%2 == 0 ).reduce((a, b) => a+b , 0);
  return [teamOne, teamTwo];
}
