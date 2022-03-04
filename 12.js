const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let product = data.reduce((inital, ele) => inital * ele, 1);
// console.log(product);

let largest;
let smallest; //assume the first element is largest element in  the array

// data.forEach(num => {
//     if (largest > num){
//         largest = num;
//     }
// })

data.forEach((num) => {
    if (num < smallest) {
        smallest = num;
    }
})
console.log(num);