/*
The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

Examples:
  numberToPower(3,2)  // -> 9 ( = 3 * 3 )
  numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
  numberToPower(10,6) // -> 1000000

Note: Math.pow and some other Math functions like eval() and ** are disabled.
*/
/********************************************************************/
// My Solution
/********************************************************************/
function numberToPower(number, power){
  if(power == 0) return 1;
  return (power > 1)? number * numberToPower(number, power - 1): number;
}


/********************************************************************/
/*
  * Other code Warriors Solution,
  * [marlonanthony, htar, N59F0A66, YaredMyers, PavelPavells, antonkitsera, mariache_08, OGr, shindesudarshan, n4d114-k (plus 6 more warriors)]
*/

function numberToPower2(number, power){
  return (power > 0)? number * numberToPower(number, power - 1): 1;
}


