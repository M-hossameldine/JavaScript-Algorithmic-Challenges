
function calcType(a, b, res) {
  let operation = ["addition", "subtraction", "multiplication", "division"];
  let operationIndex = [(a + b), (a - b), (a * b), (a / b)].indexOf(res);
  return operation[operationIndex];
}

// Other Code Wariors Solution
const calcType = (a, b, res) => 
  (a + b) == res ? "addition" : 
  (a - b) == res ? "subtraction" : 
  (a * b) == res ? "multiplication" : 
  (a / b) == res ? "division" :
  null;
