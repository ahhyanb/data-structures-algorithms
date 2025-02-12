function findMissingNumberBruteforce(array) {
    const numbers = array.length + 1;

    for (let i = 1; i < numbers; i++) {
        if (!array.includes(i)) {
            return i;
        }
    }
}

// console.log(findMissingNumberBruteForce([2, 5, 1, 4])); // Output: 3


function missingNumberSumAndSubtract(numbers) {
    let n = numbers.length + 1;

    let sumExpected = (n * (n + 1)) / 2; 
    let sumActual = numbers.reduce((acc, num) => acc + num, 0);

    return sumExpected - sumActual;
}

console.log(missingNumberSumAndSubtract([2, 5, 1, 4])); // Output: 3
console.log(missingNumberSumAndSubtract([1, 2, 4, 5, 6])); // Output: 3
console.log(missingNumberSumAndSubtract([3, 7, 1, 2, 8, 4, 5])); // Output: 6