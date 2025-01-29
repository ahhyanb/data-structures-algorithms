function binarySearch(target, elements) {
    // make sure the elements is array
    if (!Array.isArray(elements)) {
        return -1;
    }
    // initialize search variables
    let left = 0; // this is the beggining of the array
    let right = elements.length - 1 // this is the end of the array lenght - 1 because it calculates the amount in the array then minus 1 for the index

    // this is the binary search logic
    // create the while loop 
    while (left <= right) {
        // find the mid point 
        let mid = Math.floor((left + right) / 2)

        // if the middle matches the target return that index
        if (elements[mid] === target) {
            return mid;
        }
        // if that index is greater than the target
        if (elements[mid] < target) {
            // set the left side index to be the middle plus one to move up 
            // and start the search again 
            left = mid + 1;
        } else {
            // if its less than the target
            // set right to be the middle minus 1 
            // and start the search again
            right = mid - 1;
        }
    }
     // target not found
    return -1;

}