function calculate(arr, action) {
    let min = Infinity, max = -Infinity, sum = 0;

    switch (action) {
        case 'max':
            for (let i = 0; i < arr.length; i++) {
                if (!isNaN(parseFloat(arr[i])) && isFinite(arr[i])) {
                    arr[i] = +arr[i];
                    if (arr[i] > max) max = arr[i];
                }
            }
            return max;
        case 'min':
            for (let i = 0; i < arr.length; i++) {
                if (!isNaN(parseFloat(arr[i])) && isFinite(arr[i])) {
                    arr[i] = +arr[i];
                    if (arr[i] < min) min = arr[i];
                }
            }
            return min;
        case 'sum':
            for (let i = 0; i < arr.length; i++) {
                if (!isNaN(parseFloat(arr[i])) && isFinite(arr[i])) {
                    sum += +arr[i];
                }
            }
            sum = +sum.toFixed(10);
            return sum;
        default:
            console.log('Type another action (min, max, sum)');
    }
}