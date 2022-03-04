const arr = [12, 45, 6, 7, 8, 99, 101, 45, 34, 5, 6, 7, 8, 923, 2323, 94];
// const result = [];

// arr.map() returns back elements automatically into a new Array

const result = arr.map((ele) => {
    // result.push(ele * 2);
    return ele + 1;
});

// Note 2 -> Return Keyword is optional it will automatically return
// Note 3 -> the funciton call back () is also optional
// However its  a good practice :)

console.log(result);