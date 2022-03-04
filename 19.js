let data = [1500, 1500, 1, 2, 13, 1000, 1000, 4, 5, 6, 7, 8, 9, 1000];

data = [...new Set(data.sort((a, b) => (b - a)))];
console.log(data);
console.log(`The Largest Number is : ${data[0]}`);