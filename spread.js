const max = Math.max(12, 85, 1000, 999, 780);
console.log(max);
const numbers = [12, 85, 999, 78];
console.log(...numbers)
const largest = Math.max(...numbers);
console.log(largest);
const numbers2 = [...numbers];
numbers.push(452);
console.log(numbers);
console.log(numbers2);
