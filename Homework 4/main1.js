let arr = [1, 5, 9, 2, 4];

// 1) myForEach

function myForEach (arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr)
    }
    return arr
}

myForEach(arr, function (item) {
   console.log(item)
});

// 2) myMap

function myMap (arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i], i, arr))
    }
    return newArr
}

myMap(arr, function (item) {
    return item + 2
});

// 3) mySort

function mySort (arr) {
    let temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr
}

mySort(arr);

// 4) myFilter

function myFilter (arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

myFilter(arr, function (item) {
    return item > 2
});

// Closure - Create a constructor function which will use closure for working with private data.
// It should have 2 private methods and 2 private props which we can change only with that private methods.

function Count() {
    let x1;
    let x2;

    function increaseNumber(value) {
        x1 = value || 0;
        return function () {
            return ++x1
        }
    }

    function decreaseNumber(value) {
        x2 = value || 0;
        return function () {
            return --x2
        }
    }

    this.increase = increaseNumber;
    this.decreaseNumber = decreaseNumber;
}

let count1 = new Count();
let increase = count1.increase();
increase();
increase();

let decrease = count1.decreaseNumber(5);
decrease();

let count2 = new Count();
let increase2 = count2.increase();
increase2();