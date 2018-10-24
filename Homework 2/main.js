function maxArr(arr) {
    let max;
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(parseFloat(arr[i])) && isFinite(arr[i])) {
            arr[i] = +arr[i];
            max = max > arr[i] ? max : arr[i];
        }
    }
    return max
}

function minArr(arr) {
    let min;
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(parseFloat(arr[i])) && isFinite(arr[i])) {
            arr[i] = +arr[i];
            min = min < arr[i] ? min : arr[i];
        }
    }
    return min
}

function sumArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(parseFloat(arr[i])) && isFinite(arr[i])) {
            sum += +arr[i];
        }
    }
    sum = +sum.toFixed(10);
    return sum
}

function printResult(arr) {
    console.log(arr +  "  sum:" + sumArr(arr) + " min:" + minArr(arr) + " max:" + maxArr(arr))
}

printResult([3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1]);
printResult([-1,-8,-2]);
printResult([1,7,3]);
printResult([1,undefined,3,5,-3]);
printResult([1,NaN,3,5,-3]);

printResult(['2','14','']);
printResult([0.1, 0.2]);