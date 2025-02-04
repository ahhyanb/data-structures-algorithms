function sum(n) {
    // check the base case
    console.log(n)

    if (n === 1) {
        return 1;
    }
    return n + sum(n - 1);
}



console.log(sum(4));