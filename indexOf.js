function indexOf(value, elements) {
    for (let i = 0; i < elements.length; i++){
        if(elements[i] === value) {
            return i;
        }
    }
    return -1;
}

const index = indexOf(5, [1, 3, 5, 7, 9]);

console.log(index);