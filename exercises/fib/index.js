// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

const memoizer = (fn) => {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
};
const fib = memoizer(slowFib);
function slowFib(n) {
  let res = 0;
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fib(n - 1) + fib(n - 2);
}
// function fib(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   let second = 0;
//   let first = 1;
//   let res = 0;
//   for (let i = 1; i <= n - 1; i++) {
//     res = second + first;
//     second = first;
//     first = res;
//   }
//   return res;
// }
console.log(slowFib(40));
module.exports = fib;
