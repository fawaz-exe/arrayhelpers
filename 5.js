const arr = [2, 4, 77, 66, 13, 17, 19, 33, 45, 67];

// Declarative Approach with .map()
// const evenNums = arr.map((ele) => (ele % 2 == 0) ? true : false);
// console.log(evenNums);

const evenNums = [];
arr.forEach((ele) => (ele % 2 == 0) ? evenNums.push(ele) : '');
console.log(evenNums);