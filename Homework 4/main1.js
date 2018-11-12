let arr = [1, 5, 9, 2, 4];

// 1) myForEach

Array.prototype.myForEach = function (callback, thisArg) {
    let arr = thisArg || this;
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr)
    }
};

arr.myForEach(function (item) {
   console.log(item)
});

// 2) myMap

Array.prototype.myMap = function (callback, thisArg) {
    let arr = thisArg || this;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i], i, arr))
    }
    return newArr
};

arr.myMap(function (item) {
    return item + 2
}, [2, 6, 10, 3, 5]);

// 3) mySort

Array.prototype.mySort = function (compareFunction) {
    let arr = this;
    let temp;
    let check;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (compareFunction) {
                check = compareFunction(arr[j], arr[j + 1]) > 0
            } else {
                check = arr[j].toString() > arr[j + 1].toString()
            }
            if (check) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr
};

[13, 2, 10, 'a', 8, 'A', 1, 22, 'c'].mySort();

function compareNumbers(a, b) {
    return a - b;
}
[18, 2, 11, 9, 1, 10, 22].mySort(compareNumbers);

// 4) myFilter

Array.prototype.myFilter = function (callback, thisArg) {
    let arr = thisArg || this;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            newArr.push(arr[i])
        }
    }
    return newArr
};

arr.myFilter(function (item) {
    return item > 2
});

// Closure - Create a constructor function which will use closure for working with private data.
// It should have 2 private methods and 2 private props which we can change only with that private methods.

function User () {
    let name = 'Petya';
    let age = 25;

    function checkName (newName, keyword) {
        if (keyword === 'admin') {
            name = newName;
        }
    }

    function checkAge (newAge) {
        if (newAge > 18) {
            age = newAge;
        }
    }

    this.changeName = checkName;
    this.changeAge = checkAge;

    this.getName = function () {
      console.log(name)
    };

    this.getAge = function () {
      console.log(age)
    };
}

let user1 = new User();
user1.changeName('Vasya', 'admin');
user1.changeAge(22);
user1.getAge();
user1.getName();
