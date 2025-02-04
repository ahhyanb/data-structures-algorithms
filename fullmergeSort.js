function mergeSort(array) {

    // base case 
    if(array.length <= 1) {
        return array;
    }

    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);

    return merge(mergeSort(left), mergeSort(right));

}


function merge(left, right) {
    let sorted = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex].grade > right[rightIndex].grade) {
            // ✅ If left student has a higher grade, they come first
            sorted.push(left[leftIndex]);
            leftIndex++;
        } else if (left[leftIndex].grade === right[rightIndex].grade) {
            // ✅ If grades are the same, sort alphabetically by name
            if (left[leftIndex].name < right[rightIndex].name) {
                sorted.push(left[leftIndex]); // A comes before Z
                leftIndex++;
            } else {
                sorted.push(right[rightIndex]);
                rightIndex++;
            }
        } else {
            // ✅ Otherwise, right student has a higher grade
            sorted.push(right[rightIndex]);
            rightIndex++;
        }
    }
    

    // ✅ After exiting the loop, add the remaining elements
    return sorted.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


const students = [
    { name: "Alice", grade: 90 },
    { name: "David", grade: 85 },
    { name: "Charlie", grade: 90 },
    { name: "Bob", grade: 95 }
]; 

console.log(mergeSort(students));