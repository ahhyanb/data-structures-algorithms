function sort(compare, array){
    if (array.length <= 1) {
        return array;
    }

    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);

    return merge(sort(compare, left), sort(compare, right), compare);
}

function merge(left, right, compare){ 
    let sorted = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if(compare(left[leftIndex], right[rightIndex]) <= 0 ){
            sorted.push(left[leftIndex]);
            leftIndex++;
        } else {
            sorted.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return sorted.concat(left.slice(leftIndex), right.slice(rightIndex));
}



// Example Usage:
let numbers = [5, 3, 8, 4, 2, 7];
let sortedNumbers = sort((a, b) => a - b, numbers);
console.log(sortedNumbers); // Output: [2, 3, 4, 5, 7, 8]