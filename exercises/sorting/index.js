// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j <= len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const a = arr[j];
        const b = arr[j + 1];
        arr[j] = b;
        arr[j + 1] = a;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      const a = arr[i];
      const b = arr[indexOfMin];
      arr[i] = b;
      arr[indexOfMin] = a;
    }
  }
  return arr;
}

console.log(selectionSort([2, 41, -5, 3]));

function mergeSort(arr) {}

function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
