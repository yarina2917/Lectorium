function coordinates(R, C, r0, c0) {

    let count = 1;
    let arrCoordinates = [];
    arrCoordinates.push([r0, c0]);

    let max = Math.max(r0, R-r0-1, c0, C-c0-1) + 1;

    for (let j = 0; j < max; j++) {
        for (let i = count; i > 0; i--) {
            c0++;
            arrCoordinates.push([r0, c0]);
        }

        for (let i = count; i > 0; i--) {
            r0++;
            arrCoordinates.push([r0, c0]);
        }

        for (let i = count + 1; i > 0; i--) {
            c0--;
            arrCoordinates.push([r0, c0]);
        }

        for (let i = count + 1; i > 0; i--) {
            r0--;
            arrCoordinates.push([r0, c0]);
        }

        count += 2;
    }

    let filterCoordinates = arrCoordinates.filter(([r0, c0]) => {
        if (r0 >= 0 && r0 < R && c0 >= 0 && c0 < C) {
            return true
        }
    });

    return filterCoordinates
}

console.log(coordinates(5, 6, 1, 4));
console.log(coordinates(1, 4, 0, 0));
console.log(coordinates(2, 2, 0, 0));
console.log(coordinates(2, 2, 1, 1));
