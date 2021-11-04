/*
  To celebrate the start of the Rio Olympics (and the return of 'the Last Leg' on C4 tonight) this is an Olympic inspired kata.

  Given a string of random letters, you need to examine each. Some letters naturally have 'rings' in them. 'O' is an obvious example, but 'b', 'p', 'e', 'A', etc are all just as applicable. 'B' even has two!! Please note for this kata you can count lower case 'g' as only one ring.

  Your job is to count the 'rings' in each letter and divide the total number by 2. Round the answer down. Once you have your final score:

  if score is 1 or less, return 'Not even a medal!'; if score is 2, return 'Bronze!'; if score is 3, return 'Silver!'; if score is more than 3, return 'Gold!';

  Dots over i's and any other letters don't count as rings.
*/

/*

  });
*/

function olympicRing(str) {
  let rings = ['A','a', 'B', 'b', 'D', 'd', 'e', 'g', 'O', 'o', 'P', 'p', 'Q', 'q', 'R'];
  let result = '';

  let strRings = (str.split('').filter(char => rings.includes(char)) || []).length;
  let countB = (str.match(/B/g) || []).length;
  let score = Math.floor((strRings + countB) / 2);
   
  if(score <=1)         result = 'Not even a medal!';
  else if(score == 2)   result = 'Bronze!';
  else if (score == 3)  result = 'Silver!';
  else                  result = 'Gold!';

  return result;  
}

 

