// isPrime - Returns true or false, indicating whether the given number is prime.

function isPrime (num) {
    if (num === 0 || num === 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(17));
console.log(isPrime(10000000000000));

// factorial - Returns a number that is the factorial of the given number.

function factorial (num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    for (let i = num - 1 ; i >= 1; i--) {
        num *= i;
    }
    return num
}

// recursive
function factorial (num) {
    return num ? num * factorial(num - 1) : 1
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(6));

// fib - Returns the nth Fibonacci number.

function fib (num) {
    let resultArr = [0, 1];
    for (let i = 2; i < num + 1; i++) {
        resultArr.push(resultArr[i - 1] + resultArr[i - 2]);
    }
    return resultArr[num]
}

// recursive
function fib (num) {
    if (num < 2) {
        return num;
    }
    return fib(num - 1) + fib(num - 2)
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(10));
console.log(fib(20));

// isSorted - Returns true or false, indicating whether the given array of numbers is sorted.

function isSorted (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length - i - 1; j++) {
            if (arr[i] > arr[j]) {
                return false
            }
        }
    }
    return true
}

console.log(isSorted([]));
console.log(isSorted([-Infinity, -5, 0, 3, 9]));
console.log(isSorted([3, 9, -3, 10]));

// reverse - Reverses the given string

function reverse (str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str.charAt(i);
    }
    return newStr
}
console.log(reverse(''));
console.log(reverse('abcdef'));

//indexOf - Implement the indexOf function for arrays.

function indexOf (arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i
        }
    }
    return -1
}

console.log(indexOf([1, 2, 3], 1));
console.log(indexOf([1, 2, 3], 4));

// isPalindrome - Return true or false indicating whether the given string is a palindrome (case and space insensitive).

function isPalindrome (str) {
    str = str.toLowerCase().replace(/ /g,'');
    let reverseStr = str.split('').reverse().join('');
    return str === reverseStr;
}

console.log(isPalindrome(''));
console.log(isPalindrome('abcdcba'));
console.log(isPalindrome('abcb'));
console.log(isPalindrome('A man a plan a canal Panama'));

// missing, from 1 through some number n
// Can you do it in O(N) time? Hint: There’s a clever formula you can use.

function missing (arr) {
    if (!arr.length) {
        return undefined;
    }
    // n*(n+1)/2
    let total = (arr.length + 1) * (arr.length + 2) / 2;
    for (let i = 0; i < arr.length; i++) {
        total -= arr[i];
    }

    return (total === arr.length + 1) ? undefined : total;
}

console.log(missing([]));
console.log(missing([1, 4, 3]));
console.log(missing([2, 3, 4]));
console.log(missing([5, 1, 4, 2]));
console.log(missing([1, 2, 3, 4]));

// isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.
function isBalanced (str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '{' || str[i] === '}') {
            newStr += str[i]
        }
    }
    if (newStr.length % 2 !== 0) {
        return false
    }
    for (let i = 0; i < newStr.length / 2; i++) {
        if (newStr[i] !== '{' || newStr[newStr.length - i - 1] !== '}') {
            return false
        }
    }
    return true
}

console.log(isBalanced('}{'));
console.log(isBalanced('{{}'));
console.log(isBalanced('{}{}'));
console.log(isBalanced('foo { bar { baz } boo }'));
console.log(isBalanced('foo { bar { baz }'));
console.log(isBalanced('foo { bar } }'));
console.log(isBalanced('{{}}'));