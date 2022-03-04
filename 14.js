const data = [1, 2, 13, 4, 5, 6, 7, 8, 9, 1000];

const large = data.reduce((largest, current) => (current > largest) ? current : largest, data[0])
console.log(large);