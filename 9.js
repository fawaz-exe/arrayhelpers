const data = [{ a: 1, b: 2 }, { aa: 11, b: 12 }, { aaa: 111, bbb: 222 }];

let sum = 0;
data.forEach(obj => {
    for (let key in obj) {
        sum += (obj[key]);
    }
})
console.log(sum);