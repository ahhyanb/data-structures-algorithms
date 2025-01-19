function binarySearch(target, elements) {
    if (!Array.isArray(elements)) {
        return -1;
    }

    let left = 0;
    let right = elements.length - 1;

    // keep looping until the left is less than the right or the left matches the right
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // use elements[mid] because that will match whatever is in that index with the target
        if (elements[mid] === target) {
            return mid; 
        }

        // if the current mid point in the loop is less than the target change the left to be the mid + 1 in the array
        if (elements[mid] < target) {
            left = mid + 1;
            // if the current midpoint in the loop is greater than the target set the right to be mid - 1 in the array 
        } else if (elements[mid] > target) {
            right = mid - 1;
        }
    }
    return -1;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18];

const name = "ryan";

console.log(binarySearch(2, numbers));
console.log(binarySearch(18, evenNumbers));
console.log(binarySearch(11, numbers));

const doesNotWork = binarySearch(2, name);

console.log(doesNotWork);


