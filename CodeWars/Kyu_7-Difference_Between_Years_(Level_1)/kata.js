var howManyYears = function(date1, date2){
  let years = `${date1} ${date2}`
                  .match(/\d{4}/g)
                  .map(Number);
  return Math.abs(years[0] - years[1])
}

// Solution by other code warriors
var howManyYears = function(date1, date2) {
  const year = str => +str.split('/')[0];
  return Math.abs(year(date1) - year(date2)); 
}

