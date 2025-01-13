function compareNumber(target) {
    return (element) => {
      if (element === target) return 0;  // Found it
      if (element < target) return 1;   // Look right
      return -1;                        // Look left
    };
  }
  


function binaryIndexOf(compare, sortedArray) {
    let lowerIndex = 0;
    let upperIndex = sortedArray.length - 1;
  
    while (lowerIndex <= upperIndex) {
      const midIndex = Math.floor((lowerIndex + upperIndex) / 2);
      const comparison = compare(sortedArray[midIndex]);
  
      if (comparison === 0) return midIndex;   // Found it
      if (comparison > 0) lowerIndex = midIndex + 1;  // Look right
      else upperIndex = midIndex - 1;  // Look left
    }
  
    return -1;  // Not found
  }

  // 1. Create a sorted array
const numbers = [1, 3, 5, 7, 9, 11, 13, 15];

// 2. Define the target number
const target = 10;

// 3. Get the compare function for the target
const compare = compareNumber(target);

// 4. Call the binary search
const result = binaryIndexOf(compare, numbers);

// 5. Print the result
console.log(result);  // Output: 3 (index of 7 in the array)

function indexOf(compare, elements) {
    // Validate input
    if (Array.isArray(elements) && elements.length !== 0) {
      const length = elements.length; // Cache the original length
      let lowerIndex = 0;
      let upperIndex = length - 1;
  
      while (lowerIndex <= upperIndex) {
        const midIndex = Math.floor((lowerIndex + upperIndex) / 2);
  
        // Use the cached range to avoid issues with array modifications
        const comparison = compare(elements[midIndex], midIndex, elements);
  
        if (comparison === 0) return midIndex; // Found the target
        if (comparison > 0) lowerIndex = midIndex + 1; // Search the right half
        else upperIndex = midIndex - 1; // Search the left half
      }
    }
    return -1; // Target not found
  }
  
  module.exports = indexOf;
  