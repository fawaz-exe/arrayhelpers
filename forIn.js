const obj = { a: 1, b: 1, c: 1, d: 1, e: 2, f: 2 }

for (let keys in obj) {
    console.log(keys, obj[keys]);
}