function binarySearch(target, sortedArray) {
    // keeps track of the lowerIndex which is always 0
    let lowerIndex = 0; 
    // keeps track of the length of the array
    let upperIndex = sortedArray.length - 1;
 
    //while loop that compares the lower index number is larger or equal ti upper index
    while (lowerIndex <= upperIndex) {
      // if that is the case then it takes the lower index and tha upper index adds the two nummbers and divides it by two to get the middle index 
      const midIndex = Math.floor((lowerIndex + upperIndex) / 2);
      
      // if the mid index is the target
      if (sortedArray[midIndex] === target) {
        // it returns the index if its a match
        return midIndex; // Target found
      }
       //if the the middle index is greater than the target 
      if (sortedArray[midIndex] < target) {
        // it seaches the right half of the array and gooes back up to the while loop
        lowerIndex = midIndex + 1; // Search right half
      } else {
        // if the target is smaller then it searches he left half and set the upper index to the mid index - 1 and does the while loop again
        upperIndex = midIndex - 1; // Search left half
      }
    }
    
    // if there is to matching numbers or target it returns negative 1 
    return -1; // Target not found
  }