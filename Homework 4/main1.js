let arr = [1, 5, 9, 2, 4];

// 1) myForEach

function myForEach (callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr)
    }
    return arr
}

Array.prototype.myForEach = myForEach;

arr.myForEach(function (item) {
   console.log(item)
});

// 2) myMap

function myMap (callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i], i, arr))
    }
    return newArr
}

Array.prototype.myMap = myMap;

arr.myMap(function (item) {
    return item + 2
});

// 3) mySort

function mySort () {
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

Array.prototype.mySort = mySort;

arr.mySort();

// 4) myFilter

function myFilter (callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

Array.prototype.myFilter = myFilter;

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
