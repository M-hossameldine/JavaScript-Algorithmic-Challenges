/*
Find the smallest integer in the array:
Given an array of integers your solution should find the smallest integer.

For example:
  Given [34, 15, 88, 2] your solution will return 2
  Given [34, -345, -1, 100] your solution will return -345

  You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

/***************************************************************/
// My Solution
/***************************************************************/
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.reduce((a, b) => a < b? a: b);
  }
}

const getSmallestInteger = new SmallestIntegerFinder ();
console.log(getSmallestInteger.findSmallestInt([2, 1, 8, 3]));    // -> 1

/*****************************************************************/ 
// OTher Code Warriors Solution
/*****************************************************************/ 

class SmallestIntegerFinder {
  findSmallestInt( args ) {
    return Math.min(...args);
  }
}
/*****************************************************************/ 



