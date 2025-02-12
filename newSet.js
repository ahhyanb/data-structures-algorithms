const numbers = new Set();

numbers.add(20);
console.log(numbers);


const fruits = ["Apple", "Peach", "Banana", "Orange", "Peach", "Grapes", "Mango", "Strawberry", "Pineapple", "Blueberry", "Peach", "Watermelon"];

const fruitsSet = new Set(fruits);
console.log(fruitsSet);

const uniqueFruits = [...fruitsSet];
console.log(uniqueFruits);


// How many unique characters are in the word 'Data Structures'?
const word = "Data Structures";

// Create a Set - lowercase the word
const set = new Set(word.toLowerCase());

// Size of the Set is the number of unique characters
console.log(set.size);