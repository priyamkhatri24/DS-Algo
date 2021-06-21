// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const outerArray = new Array(n).fill(new Array(n));
  let i = 0;
  let j = 0;
  let counter = 0;
  for (j; j < n; j++) {
    outerArray[i][j] = counter;
    counter++;
  }
  for (i; i < n; i++) {
    outerArray[i][j] = counter;
    counter++;
  }
  for (j; j >= 0; j--) {
    outerArray[i][j] = counter;
    counter++;
  }

  console.log(outerArray);
  return outerArray;
}
matrix(4);

module.exports = matrix;
