// efficiency of an algorithm

// function sumIntegers(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       sum = sum + i;
//     }
//     return sum;
//   }

//   console.log(sumIntegers(4));

function sumIntegers(n) {
    return (n * (n+1)) / 2;
}

  


const NUMBER_OF_REPETITIONS = 10; // Number of times to repeat the test
const N = 10000000;

let sumOfRunningTime = 0n;

for (let k = 1; k <= NUMBER_OF_REPETITIONS; k++) {
  const start = process.hrtime.bigint();

  const answer = sumIntegers(N);

  const end = process.hrtime.bigint();

  sumOfRunningTime += end - start;
}

const averageTime = sumOfRunningTime / BigInt(NUMBER_OF_REPETITIONS);

console.log(
  `Summing ${N} numbers took an average of  ${averageTime} nanoseconds`
);