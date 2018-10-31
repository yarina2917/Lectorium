function transform (arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in obj) {
            obj[arr[i]].push(i);
        } else {
            obj[arr[i]] = [];
            obj[arr[i]].push(i);
        }
    }

    return obj
}

console.log(transform([2, 13, 'str', 2, 5, 17, 29, 5, 0]));