function mergeSort(array) {

    //base case 
    if(array.length <= 1) {
        return array;
    }

    // if not
    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);

    return merge(mergeSort(left), mergeSort(right));

}

function merge(left, right) {
    let sorted = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex].grade > right[rightIndex].grade) {
            sorted.push(left[leftIndex]);
            leftIndex++
        } else if (left[leftIndex].grade === right[rightIndex].grade) {
            if (left[leftIndex].name < right[rightIndex].name){ 
                sorted.push(left[leftIndex]);
                leftIndex++;
            } else {
                sorted.push(right[rightIndex]);
                rightIndex++;

            }
        } else { 
            sorted.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return sorted.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


const students = [
    { name: "Alice", grade: 90 },
    { name: "David", grade: 85 },
    { name: "Charlie", grade: 90 },
    { name: "Bob", grade: 95 }
]; 

console.log(mergeSort(students));