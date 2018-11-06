function coordinates(R, C, r0, c0) {

    let coordIncreaseCount = 1;
    let coordIncreaseTemp = 1;
    let coordDecreaseCount = 2;
    let coordDecreaseTemp = 2;

    let arrCoordinates = [];
    arrCoordinates.push([r0, c0]);

    while (arrCoordinates.length < R * C) {
        while (coordIncreaseCount) {
            c0++;
            if (c0 >= 0 && c0 < C && r0 >= 0 && r0 < R) {
                arrCoordinates.push([r0, c0]);
            }
            coordIncreaseCount--;
        }

        coordIncreaseCount = coordIncreaseTemp;

        while (coordIncreaseCount) {
            r0++;
            if (r0 >= 0 && r0 < R && c0 >= 0 && c0 < C) {
                arrCoordinates.push([r0, c0]);
            }
            coordIncreaseCount--;
        }

        coordIncreaseTemp += 2;
        coordIncreaseCount = coordIncreaseTemp;

        while (coordDecreaseCount) {
            c0--;
            if (c0 >= 0 && c0 < C && r0 >= 0 && r0 < R) {
                arrCoordinates.push([r0, c0]);
            }
            coordDecreaseCount--;
        }

        coordDecreaseCount = coordDecreaseTemp;

        while (coordDecreaseCount) {
            r0--;
            if (r0 >= 0 && r0 < R && c0 >= 0 && c0 < C) {
                arrCoordinates.push([r0, c0]);
            }
            coordDecreaseCount--;
        }

        coordDecreaseTemp += 2;
        coordDecreaseCount = coordDecreaseTemp;
    }

    return arrCoordinates;
}

console.log(coordinates(5, 6, 1, 4));
console.log(coordinates(1, 4, 0, 0));