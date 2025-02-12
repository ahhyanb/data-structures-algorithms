const customers = new Map();
console.log(customers);


customers.set(1, {
    firstName: "Ryan",
    lastName: "Bartolome"
});
customers.set(2, {
    firstName: "Alice",
    lastName: "Johnson"
});
customers.set(3, {
    firstName: "Michael",
    lastName: "Smith"
});
customers.set(4, {
    firstName: "Sophie",
    lastName: "Williams"
});
customers.set(5, {
    firstName: "David",
    lastName: "Brown"
});

console.log(customers);

// get the size of the map
console.log(customers.size);

// prints the keys by iterating through the map .keys()
for (let key of customers.keys()) {
    console.log(key);
  }

// prints the values .values()
for (let value of customers.values()) {
    console.log(value);
  }

const months = new Map();
months.set(0, "January");
months.set(1, "February");
months.set(2, "March");
months.set(3, "April");
months.set(4, "May");
months.set(5, "June");
months.set(6, "July");
months.set(7, "August");
months.set(8, "September");
months.set(9, "October");
months.set(10, "November");
months.set(11, "December");

  for (let [key, value] of months.entries()) {
    console.log(`${key + 1} : ${value}`); // print 1: January etc
  }

  months.forEach((value, key) => console.log(`${key + 1} : ${value}`)); // print 1: January etc

  const days = [
    [0, "Sunday"],
    [1, "Monday"],
    [2, "Tuesday"],
    [3, "Wednesday"],
    [4, "Thursday"],
    [5, "Friday"],
    [6, "Saturday"]
  ];
  
  const dayMap = new Map(days);

  const dayArray = [...dayMap];

  
