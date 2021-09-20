/*
Quarter of the year:
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
*/
const quarterOf = (month) => {
  let months = [ [1,2 ,3], [4, 5, 6], [7, 8, 9], [10, 11, 12] ];
  return months.reduce((prev, current, index) => (current.includes(month)) ? index + 1: prev   , 0)  
}

console.log(quarterOf(11));    // -> 4

// Other Solution
const quarterOf = m => Math.ceil(m/3);
