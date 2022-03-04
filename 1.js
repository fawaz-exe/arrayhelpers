const arr = [12, 45, 6, 7, 8, 99, 101, 45, 34, 5, 6, 7, 8, 923, 2323, 94];

// Iterative Approcach - We dicate the compiler each and every step.
// for (i = 0; i <= arr.length; i++) {
//     console.log(arr[i]);
// }

// Declarative Approach
// arr.forEach((x) => { console.log(x) });

// Note 1 - If you have a single line then you dont need - {}

arr.forEach((x) => console.log(x));