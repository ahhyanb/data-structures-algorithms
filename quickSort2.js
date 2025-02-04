function quickSort(array, low = 0, high = array.length - 1){
    if (Array.isArray(array)) {

        // base case
        if(low >= high) {
            return array;
        }

        let pivotIndex = partition(array, low, high);

        quickSort(array, low, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, high);
    }

    return array;
}

function partition(array, low, high) {
    let pivot = array[high];
    let partitionIndex = low;

    for (let i = 0; i < high; i++) {
        if (array[i] < pivot) {
            [array[i], array[partitionIndex]] = [array[partitionIndex], array[i]];
            partitionIndex++;
        }
    }

    [array[partitionIndex], array[high]] = [array[high], array[partitionIndex]]; // Swap pivot into place
    return partitionIndex; // Return final position of pivot
}



// so the partition function will accept 3 parameters array, low, high

// it assigns the pivot the number we want to place in the correct order,
// it assigns the partitionIndex the index where we start to iterate???

// then we have a for loop that itereates through the array starting at the first array and it matches the numberr iin the 
// current partiionIndex sorry not matches it compares the current number in the loop with the pivot number 
// if the pivot is less than the current number in the loop 
// [array[i], array[partitionIndex]] = [array[partitionIndex], array[i]]; i dont really understand this swap or line of code 
// but after it suppose to swap the partionIndex gets increment up by 1

// [array[partitionIndex], array[high]] = [array[high], array[partitionIndex]]; // Swap pivot into place
//     return partitionIndex; // Return final position of pivot 
//     i also dont understand this part of the code please help