const arr = [2, 4, 77, 66, 13, 17, 19, 33, 45, 67];

// Iterative Approach
function isEven(arr) {
    const even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even.push(arr[i]);
        }
    }
    return even;
}

const evenNums = isEven(arr);
console.log(arr);
console.log(evenNums);