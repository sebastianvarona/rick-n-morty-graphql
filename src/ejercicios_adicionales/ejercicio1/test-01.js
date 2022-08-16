var sumMatrix = function (matrix) {
    var sum = matrix.reduce(function (prevValue, currValue) {
        return (prevValue +
            currValue.reduce(function (prev, curr) {
                return prev + curr;
            }));
    }, 0);
    return sum;
};
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(sumMatrix(matrix));
