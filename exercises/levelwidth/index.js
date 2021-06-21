// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const arr = [root, "\n"];
  const counters = [0];
  while (arr.length > 1) {
    if (arr[0] === "\n") {
      counters[counters.length] = 0;
      arr.push(arr.shift());
    } else {
      const currentElement = arr.shift();
      arr.push(...currentElement.children);
      counters[counters.length - 1] += 1;
    }
  }
  return counters;
}

module.exports = levelWidth;
