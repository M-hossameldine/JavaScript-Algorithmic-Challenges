/*
Your Task:
  Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

Examples:
  1. booleans = [True, True, False], operator = "AND"
  True AND True -> True
  True AND False -> False
  return False

  2. booleans = [True, True, False], operator = "OR"
  True OR True -> True
  True OR False -> True
  return True

  3. booleans = [True, True, False], operator = "XOR"
  True XOR True -> False
  False XOR False -> False
  return False

Input:
  an array of Boolean values (1 <= array_length <= 50)
  a string specifying a logical operator: "AND", "OR", "XOR"

Output:
  A Boolean value (True or False).

*/
/*************************************************************************/
// My Solution 
/*************************************************************************/ 
function logicalCalc(array, op){
  let result = array[0];
  while(array.length != 1) {
    result = logicResult(array[0], array[1], op);  
    array.splice(0, 2, result);
    console.log(result)
  } 
  return result;
}

function logicResult(operand1, operand2, op) {
  let opResult;
  switch(op){
    case "AND":
      opResult = operand1 * operand2;
      break;
    case "OR":
      opResult = operand1 + operand2;
      break;
    case "XOR":
      opResult = (operand1 != operand2)? 1: 0;
      break;
  }
  return opResult != 0 ? true: false;
}

/*************************************************************************/
/*
  * Inspired by some other Warriors = [user5036852, Fatima87, Ilya.senkevich, Ilyamelnik, kirillMIX, getuliogfc, afear74]
*/
function logicalCalc2(array, op)
{ 
  var result = array[0];
  for(var i = 1; i < array.length; i++)
  {
    if(op == "AND")
    {
      result = result && array[i];
    }
    if(op == "OR")
    {
      result = result || array[i];
    }
    if(op == "XOR")
    {
      result = result != array[i];
    }
  }
  return result;
}

/*************************************************************************/
/*
  * Inspired by some other Warriors = [Scotticus, guilherme-dellatorre]
*/
function logicalCalc3(array, op) {
  switch (op) {
    case "AND": return array.reduce(and);
    case "OR" : return array.reduce(or);
    case "XOR": return array.reduce(xor);
  }
}

function and(bool1, bool2) {
  return bool1 && bool2;
}

function or(bool1, bool2) {
  return bool1 || bool2;
}

function xor(bool1, bool2) {
  return bool1 != bool2;
}

/*************************************************************************/
/*
  * Inspired by some other Warriors = [Kocevnik, shubhamsiwan786, zahra_kaabi]
*/
function logicalCalc4(array, op){
  switch ( op ) {
    case "OR":
     return array.reduce( (a, b) => a || b );
    break;
    case "AND":
      return array.reduce ( (a, b) => a && b);
    break;
    case "XOR":
      return array.reduce ( (a, b) => a != b);
    break;
  }
}

/*************************************************************************/
/*
  * Inspired by some other Warriors = [chapaisnoopi]
*/

function logicalCalc5(array, op){
  switch (op) {
    case 'AND': return array.every(el => el);
    case 'OR' : return array.some(el => el);
    case 'XOR': return !!(array.filter(el => el).length % 2);
  }
}
/*************************************************************************/
/*
  * Inspired by some other Warriors = [YiyangLi, nam.nguyen.code, imansedky5, 09Anshika, Kanak, chaima ammar, nadanm, sureshvarma]
*/

var ops = {
  'AND': (a, b) => a && b,
  'OR': (a, b) =>  a || b,
  'XOR': (a, b) => a !== b
}


function logicalCalc6(array, op){
  return array.reduce(ops[op]);
}
/*************************************************************************/