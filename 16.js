// const data = [1, 2, 13, 4, 5, 6, 7, 8, 9, 1000];
// Write an algorithm to find second largest number in the data array.
// 1 ) Try forEach
// 2 ) Try reduce() , if it doesn't work, then why not?
// 3 ) Sort the array in the ascending order, the last index is largest number, lastIndex-1 will be second largest (no duplicates)

let data = [1500, 1500, 1, 2, 13, 1000, 1000, 4, 5, 6, 7, 8, 9, 1000];
// Method 1: Sort the Array

console.log(`Before Sorting : `, data);
data = data.sort((a, b) => b - a);
console.log(`After Sorting : `, data);
console.log(`The Largest Number :`, data[0]);
let f = 0;
data.forEach((ele) => (ele == data[0]) ? ++f : f);
console.log(`The Second Largest Number :`, data[f]);



