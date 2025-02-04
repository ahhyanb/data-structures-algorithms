function mergeSort(compare, elements) {
    if (Array.isArray(elements)) {

        // base case when to stop splitting 
      if (elements.length <= 1) {
        return elements;
      }
  
    // The array is divided into two halves:
    // Left half: Everything from the start of the array to the middle.
    // Right half: Everything from the middle to the end.

    // For example, if elements = [8, 3, 5, 1]:
    // middle = 2
    // leftElements = [8, 3]
    // rightElements = [5, 1]

      const middle = Math.floor(elements.length / 2);

      const leftElements = elements.slice(0, middle);
      const rightElements = elements.slice(middle);
  
      /* The function calls itself on the left and right halves.
      This keeps splitting the arrays until each piece has just 1 element.  */

      const leftElementsSorted = mergeSort(compare, leftElements);
      const rightElementsSorted = mergeSort(compare, rightElements);
  
      /* Once the arrays are split into tiny pieces, 
      the merge function is called to combine 
      the sorted halves back into a single sorted array.*/

      return merge(compare, leftElementsSorted, rightElementsSorted);
    }
    return elements;
  }
  
  /**
   * Merges two sorted arrays
   *
   * @param compare
   *  Function to compare elements of the array
   * @param left
   *  The left sorted array
   * @param right
   *  The right sorted array
   * @returns {*[]}
   *  The left and right sorted arrays merged in sorted order
   */
  

    /* The merge function takes two sorted arrays 
    (left and right) and combines them into one sorted array. */

  function merge(compare, left, right) {
    const sorted = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
    
      // Compare the current elements from the left and right arrays.
      const comparison = compare(left[leftIndex], right[rightIndex]);
  
      /* If the left element is smaller or equal, 
      add it to the result (sorted) and move to 
      the next element in the left array. */

      if (comparison <= 0) {
        sorted.push(left[leftIndex]);
        leftIndex++;

      /* Otherwise, add the right element to the result 
      and move to the next element in the right array. */

      } else {
        sorted.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    /* Once one of the arrays is empty, just add all 
    the leftover elements from the other array to the result. */
    
    return sorted.concat(
      leftIndex < left.length ? left.slice(leftIndex) : right.slice(rightIndex)
    );
  }
  
  module.exports = mergeSort;


