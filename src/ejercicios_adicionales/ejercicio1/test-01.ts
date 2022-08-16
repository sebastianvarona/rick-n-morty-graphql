// Este es el original pero fue compilado a JavaScript con 'tsc' para poder correrlo en node

export const sumMatrix = (matrix: number[][]) => {
  const sum = matrix.reduce((prevValue, currValue) => {
    return (
      prevValue +
      currValue.reduce((prev, curr) => {
        return prev + curr;
      })
    );
  }, 0);
  return sum;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(sumMatrix(matrix));
