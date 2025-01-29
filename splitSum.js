function splitSum1(tours) {
    // Step 1: Calculate the total sum of the array
    const total = tours.reduce((sum, num) => sum + num, 0);
  
    // Step 2: Initialize variables
    let preSum = 0; // The sum of the left part
    let postSum = total; // The sum of the right part
    let smallest = Infinity; // Smallest difference found so far
  
    // Step 3: Iterate through the array to find the best split point
    for (let i = 0; i < tours.length; i++) {
      preSum += tours[i]; // Add current number to left sum
      postSum -= tours[i]; // Remove current number from right sum
  
      const difference = Math.abs(preSum - postSum); // Find the absolute difference
  
      // Update smallest difference if this is the best split so far
      if (difference < smallest) {
        smallest = difference;
      }
    }
  
    // Step 4: Return the smallest difference
    return smallest;
  }
  
//   🔹 How splitSum1 Works (Step-by-Step):
// First, add up all the numbers in tours to get total.
// Start with:
// preSum = 0 (left side sum starts empty).
// postSum = total (right side sum has everything).
// Go through each number, moving it from right to left:
// Add the number to preSum.
// Remove it from postSum.
// Calculate the difference between preSum and postSum.
// Keep track of the smallest difference found.


function splitSum2(tours) {
    let smallest = Infinity; // Smallest difference found
  
    // Step 2: Try every possible split point
    for (let i = 0; i < tours.length; i++) {
      // Calculate preSum and postSum by slicing
      let preSum = tours.slice(0, i + 1).reduce((sum, num) => sum + num, 0);
      let postSum = tours.slice(i + 1).reduce((sum, num) => sum + num, 0);
  
      let difference = Math.abs(preSum - postSum); // Find the absolute difference
  
      // Update smallest difference if needed
      if (difference < smallest) {
        smallest = difference;
      }
    }
  
    // Step 3: Return the smallest difference
    return smallest;
  }
  