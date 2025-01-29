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
  
  