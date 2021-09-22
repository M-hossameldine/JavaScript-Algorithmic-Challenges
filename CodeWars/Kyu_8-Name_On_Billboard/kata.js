/* 
Name on Billboard:
You can print your name on a billboard ad. Find out how much it will cost you. Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

You can not use multiplier "*" operator.

If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a letter).
Examples:
billboard("Jeong-Ho Aristotelis")  -> 600
billboard("Hadufuns John", 20)     -> 260
*/

function billboard(name, price = 30){
  return (price == 0)? 0 : name.length + billboard(name, price - 1);
} 

// Another Solution
function billboard(name, price = 30){
  return name.split('').reduce( (prev, current) => prev + price, 0);
} 

// Another Solution
function billboard(name, price = 30){
  return 'i'.repeat(name.length).repeat(price).length;
} 

// Another Solution
function billboard(name, price = 30) {
  return name.length / (1 / price)
}

