// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const wordA = stringA.replace(/[^\w]/g, "").toLowerCase();
  const wordB = stringB.replace(/[^\w]/g, "").toLowerCase();
  const histA = {};
  const histB = {};
  for (let char of wordA) {
    if (histA[char]) {
      histA[char] += 1;
    } else {
      histA[char] = 1;
    }
  }
  for (let char of wordB) {
    if (histB[char]) {
      histB[char] += 1;
    } else {
      histB[char] = 1;
    }
  }
  return (
    wordA.split("").every((ele) => histA[ele] === histB[ele]) &&
    wordB.split("").every((ele) => histA[ele] === histB[ele])
  );
}
anagrams("Hi there", "Bye there");

module.exports = anagrams;
