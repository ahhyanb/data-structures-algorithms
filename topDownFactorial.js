function factorial(number, total = 1) {
    console.log("Forward phase", number, "*", total);
  
   // Base case: If the number is less than or equal to 1, log the base case 
// and return the current total as the final result.

if (number <= 1) { 
  console.log("base case", number);
  return total; 
}

// Recursive case: If the number is greater than 1, calculate the next total 
// by multiplying the current number with the total. Call the function again 
// with (number - 1) and the updated total.

total = factorial(number - 1, total * number);

// Backward phase: Log the current state as the recursion "unwinds" 
// and return the final total (no further calculations are done here).

console.log("Backward phase", number, total);
return total;
  }
  
  console.log(factorial(5));



  //  itiratative function instead of recursive to avoid  stack overflow

  function iteratativeFactorial(number) {
    // Base case
    if (number <= 1) {
      return 1;
    }
  
    // Penultimate means second to the last in a series.
    let penultimate = 1;
    let total = 0;
  
    // Calculate the factorial from 1 to `number`
    for (let ultimate = 1; ultimate <= number; ultimate++) {
      console.log(ultimate, "*", penultimate);
      total = ultimate * penultimate;
      penultimate = total;
    }
    return total;
  }
  

  console.log(iteratativeFactorial(5));

  // function sum(n):
  // // Accepts n - find the sum from 1 to n
  // // First, check the base case
  // if n is equal to 1 then:
  //   return 1

  // // Otherwise, find the solution to the subproblem
  // // by making a recursive call
  // subproblemSum = sum(n - 1)

  // // Summation
  // return n + subproblemSum;