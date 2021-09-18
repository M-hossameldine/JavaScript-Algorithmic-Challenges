/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
*/

// 1st Solution
function solution(str, ending){
  return str.endsWith(ending);
}

// 2nd Solution
function solution2(str, ending){
  let strSlice = str.slice(str.length - ending.length);
  return strSlice == ending ? true : false;
}

// 3rd Solution
function solution_3(str, ending) {
  let l = ending.length;
  return str.slice(-l) == ending;
}

// 4th Solution
function solution_4(str, ending) {
  let l = ending.length;
  return str.substr(-l) == ending;
}

