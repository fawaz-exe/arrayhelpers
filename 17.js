let data = [1500, 1500, 1, 2, 13, 1000, 1000, 4, 5, 6, 7, 8, 9, 1000];
// Method 1: Sort the Array

console.log(`Before Sorting : `, data);
data = data.sort((a, b) => b - a);
console.log(`After Sorting : `, data);
console.log(`The Largest Number :`, data[0]);
let f = data.reduce((freq, ele) => (ele == data[0]) ? ++freq : freq, 0);
console.log(`The Second Largest Number :`, data[f]);
