function indexOf(isMatch, elements) {
    // make sure the elements is an array
    if (Array.isArray(elements)) {
        // then go through each item in the element 
      for (let index = 0, length = elements.length; index < length; index++) {
        if (isMatch(elements[index], index, elements)) {
          return index;
        }
      }
    }
    return -1;
  }
  
  module.exports = indexOf;