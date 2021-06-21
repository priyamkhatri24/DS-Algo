// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   const resultArr = [];
//   let chunk = [];
//   for (let ele = 0; ele < array.length; ele++) {
//     chunk.push(array[ele]);
//     if (chunk.length === size) {
//       resultArr.push(chunk);
//       chunk = [];
//     }
//     if (ele === array.length - 1 && chunk.length) {
//       resultArr.push(chunk);
//     }
//   }
//   console.log(resultArr);
//   return resultArr;
// }

function chunk(array, size) {
  let index = 0;
  const answer = [];
  while (index <= array.length - 1) {
    const chunk = array.slice(index, size + index);
    if (chunk.length) answer.push(chunk);
    index = index + size;
  }
  return answer;
}

chunk([1, 2, 3, 4, 5], 4);

module.exports = chunk;
