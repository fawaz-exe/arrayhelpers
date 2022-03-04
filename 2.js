const arr = [12, 45, 6, 7, 8, 99, 101, 45, 34, 5, 6, 7, 8, 923, 2323, 94];
const result = [];
//arr.map()

// arr.map((num)=>{console.log(num)});

// multiply each element in array and multiply with 2

arr.forEach((ele) => {
    result.push(ele * 2);
});

console.log(result);