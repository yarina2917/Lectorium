function coordinates(R, C, r0, c0) {

    let count = 1;
    let arrCoordinates = [];
    arrCoordinates.push([r0, c0]);

    while (arrCoordinates.length < R * C) {
        for (let i = count; i > 0; i--) {
            c0++;
            if (c0 >= 0 && c0 < C && r0 >= 0 && r0 < R) {
                arrCoordinates.push([r0, c0]);
            }
        }

        for (let i = count; i > 0; i--) {
            r0++;
            if (r0 >= 0 && r0 < R && c0 >= 0 && c0 < C) {
                arrCoordinates.push([r0, c0]);
            }
        }

        for (let i = count + 1; i > 0; i--) {
            c0--;
            if (c0 >= 0 && c0 < C && r0 >= 0 && r0 < R) {
                arrCoordinates.push([r0, c0]);
            }
        }

        for (let i = count + 1; i > 0; i--) {
            r0--;
            if (r0 >= 0 && r0 < R && c0 >= 0 && c0 < C) {
                arrCoordinates.push([r0, c0]);
            }
        }

        count += 2;
    }

    return arrCoordinates;
}

console.log(coordinates(5, 6, 1, 4));
console.log(coordinates(1, 4, 0, 0));