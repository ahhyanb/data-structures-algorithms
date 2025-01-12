function binarySearch(target, sortedArray) {
    let lowerIndex = 0;
    let upperIndex = sortedArray.length - 1;
  
    while (lowerIndex <= upperIndex) {
      const midIndex = Math.floor((lowerIndex + upperIndex) / 2);
  
      if (sortedArray[midIndex] === target) {
        return midIndex; // Target found
      }
  
      if (sortedArray[midIndex] < target) {
        lowerIndex = midIndex + 1; // Search right half
      } else {
        upperIndex = midIndex - 1; // Search left half
      }
    }
  
    return -1; // Target not found
  }