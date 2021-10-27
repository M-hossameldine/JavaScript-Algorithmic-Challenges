function evenNumbers(array, number) {
  return array.filter( n => n % 2 == 0).slice(-number);
}

// Solution by other Code Warriors
/*
Using "AND" & bitwise operator
Every odd number LSB (least significant bit) is "1"
   So (oddNumber & 1) will always be 1
   3    011
    &       &
   1    001
   --- -----
   1    001
Every even number LSB is (0)
  So(evenNumber & 1) will always be 0
  4    100
    &      &
  1    001
  --- -----
  0    000
*/

function oddNumbers(array, number) {
  return array.filter( n => !(n & 1)).slice(-number);
}
