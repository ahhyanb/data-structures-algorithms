function factorial(number) {
    console.log("Forward phase", number);

    // Base case 
    if(number <= 1) {
        console.log("base case", number);
        return 1;
    }

    // Recursive case 
    const numberrMinusOneFactorial = factorial(number - 1);
    console.log("Backward phase", number, "*", numberrMinusOneFactorial);
    return number * numberrMinusOneFactorial;

}

console.log(factorial(5));