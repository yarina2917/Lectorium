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
    let sort;

    function compare(a, b) {
        if (a.toString() < b.toString()) {
            return -1;
        }
        if (a.toString() > b.toString()) {
            return 1;
        }
        return 0;
    }

    sort = compareFunction || compare;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            let check = sort(arr[j], arr[j + 1]);
            if (check === 1) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr
};

let arr2 = [15, 2, 10, 'A', 8, 'a', 1, 22, 'c'];
arr2.mySort();

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}
arr2.mySort(compareNumeric);

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
