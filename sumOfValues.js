const data = [{ a: 1, b: 2 }, { aa: 11, b: 12 }, { aaa: 111, bbb: 222 }];
// To find the sum of all the values from the above array of objs

// Method 1
// let result;
// for (let i = 0; i < data.length; i++) {
//     console.log(Object.values(data[i]));
// }

//Method 2
let total = 0;
data.forEach((obj) => {
    let arr = console.log(Object.values(obj));
    let sum = 0;
    console.log(arr);
    arr.forEach(ele => sum += ele);
    total += sum;
});

// Callback - A function is going as a parameter to another function.
// ES6 - JavaScript went through a lot of changes in  2015/16

// Method 3 (using .map())

let sum = 0
let values = data.map(ele => console.log(Object.values(ele)))
values = values.flat(); //.flat() = mereges the arrays into one array
values.forEach(num => sum += num);
console.log(sum);
