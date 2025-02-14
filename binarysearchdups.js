// given a sorted array like 
// [1,2,2,2,3,3,4,5,6]
// find the first occurrence of the duplicated number in the array
// the output should be 2...




function searchDupe(elements) {
    // make sure the elements is an array before proceeding
    if (!Array.isArray(elements)) {
        return -1;
    }

    // set the left to be the first array initially
    let left = 0;
    // set the right to be the last array initially
    let right = elements.length - 1;

    // as long as the left is less than or equal to the right keep searching
    while (left <= right) {
        // find the mid point and round down so we dont miss anything in the array
        let mid = Math.floor((left + right) / 2);

        // if the mid is greater than 0 and the current middle index in the array matches the number next to the middle to the left 
        if (mid > 0 && elements[mid] === elements[mid - 1]) {
            // set the right side to be the number to the left of the current mid
            right = mid - 1;
        // if the mid is less than the length of the elements - 1 and the current middle index number matches the number to the right of the number 
        } else if (mid < elements.length - 1 && elements[mid] === elements[mid + 1]) {
            // then return that number
            return elements[mid];

        // if the current middle number is less than the number to the right of it 
        } else if (elements[mid] < elements[mid + 1]) {
            // set the left to be the mid + 1
            left = mid + 1;
        } else {
            // if none of those are true then set the right to be mid - 1 
            right = mid - 1;
        }
    }

    return -1; 
}

const numbers = [1, 2, 3, 3, 4, 5, 6];

console.log(searchDupe(numbers));
