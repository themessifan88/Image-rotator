export const rotateMatrixClockWise = (matrix, noOfRotations = 1) => {
    while (noOfRotations > 0) {
        matrix = rotateMatrixClockWiseSingle(matrix);
        noOfRotations--;
    }
    return matrix;
}

const getElementsFromAColumn = (matrix, column) => {
    let resultantRow = [];
    for (let row = matrix.length - 1; row >= 0; row--) {
        resultantRow.push(matrix[row][column]);
    }
    return resultantRow;
}

const rotateMatrixClockWiseSingle = (matrix) => {
    let result = [];
    for (let col = 0; col < matrix.length; col++) {
        result.push(getElementsFromAColumn(matrix, col));
    }
    return result;
}