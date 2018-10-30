function calculateWater (arr) {
    let maxLeft = Math.max(...arr);
    let maxLeftIndex = arr.indexOf(maxLeft);
    let leftValue = -Infinity;
    let leftValueIndex;
    let sumLeft = 0;

    let maxRight = Math.max(...arr);
    let maxRightIndex = arr.indexOf(maxRight);
    let rightValue = -Infinity;
    let rightValueIndex;
    let sumRight = 0;

    while (maxLeftIndex !== 0) {
        for (let i = maxLeftIndex - 1; i >= 0; i--) {
            if (arr[i] > leftValue) leftValue = arr[i];
        }
        leftValueIndex = arr.indexOf(leftValue);
        for (let j = maxLeftIndex - 1; j !== leftValueIndex; j--) {
            sumLeft += (arr[leftValueIndex] - arr[j]);
        }
        maxLeft = leftValue;
        maxLeftIndex = arr.indexOf(maxLeft);
        leftValue = -Infinity;
    }

    while (maxRightIndex !== (arr.length - 1)) {
        for (let i = maxRightIndex + 1; i < arr.length; i++) {
            if (arr[i] > rightValue) rightValue = arr[i];
        }
        rightValueIndex = arr.lastIndexOf(rightValue);
        for (let j = maxRightIndex + 1; j !== rightValueIndex; j++) {
            sumRight += (arr[rightValueIndex] - arr[j]);
        }
        maxRight = rightValue;
        maxRightIndex = arr.lastIndexOf(maxRight);
        rightValue = -Infinity;
    }

    return sumLeft + sumRight

}

let arr1 = [2, 5, 1, 3, 1, 2, 1, 7, 7, 6]; // 17
let arr2 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]; // 10
let arr3 = [7, 0, 1, 3, 4, 1, 2, 1]; // 9
let arr4 = [2, 2, 1, 2, 2, 3, 0, 1, 2]; // 4
let arr5 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8]; // 24
let arr6 = [2, 2, 2, 2, 2]; // 0

console.log(calculateWater(arr1));
console.log(calculateWater(arr2));
console.log(calculateWater(arr3));
console.log(calculateWater(arr4));
console.log(calculateWater(arr5));
console.log(calculateWater(arr6));

