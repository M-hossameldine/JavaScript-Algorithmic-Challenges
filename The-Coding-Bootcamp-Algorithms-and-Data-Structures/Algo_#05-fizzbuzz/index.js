let print = (value) => console.log(value); 

function fizzBuzz(n) {
   for(let i = 1; i <= n; i++) {
    if (i % 5 == 0 && i % 3 == 0) print("fizzbuzz");
    else if(i % 3 == 0) print("fizz");
    else if (i % 5 == 0) print("buzz");
    else print(i)
   }
}

module.exports = fizzBuzz;
