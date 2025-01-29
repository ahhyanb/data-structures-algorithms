function gcd2(a, b) {
    // if a is equal to 0, return b
    if (a === 0) {
      return b;
    }
  
    // if b is equal to 0, then return a
    if (b === 0) {
      return a;
    }
  
    // start a new variable to store the divisibles
    const divA = [1, a];
    const divB = [1, b];

    const common = [];
  
    // push all the numbers that can be used to devide the number equally for div a 
    for (let i = 2; i < a; i++) {
      if (a % i === 0) {
        divA.push(i);
      }
    }

    
    // push all the number that can be used to divide the number equally for div b
    for (let i = 2; i < b; i++) {
      if (b % i === 0) {
        divB.push(i);
      }
    }
  
    // now go through each each number and see if there are any numbers that includes in the numbers from div b to div a
    // and push those to the common variable to store them 
    for (let i = 0; i < divA.length; i++) {
      if (divB.includes(divA[i])) {
        common.push(divA[i]);
      }
    }

    // now in the common variable go through each item and find the largest number in that array by comparing the the largest with the current item in the array
    let largest = Number.NEGATIVE_INFINITY; // what is this???
    for (let i = 0; i < common.length; i++) {
      if (common[i] > largest) {
        largest = common[i];
      }
    }
  
    // return the largest number
    return largest;
  }