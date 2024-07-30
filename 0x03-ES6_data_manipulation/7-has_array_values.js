// 7-has_array_values.js

/**
 * Checks if a Set contains any values from a given array.
 *
 * @param {Set} set - The Set to check.
 * @param {Array} array - The array of values to look for in the Set.
 * @returns {Boolean} True if the Set contains any values from the array, false otherwise.
 * @throws {Error} If the input is not an array.
 *
 * @example
 * const mySet = new Set([1, 2, 3]);
 * const myArray = [2, 4, 6];
 * console.log(hasValuesFromArray(mySet, myArray)); // Output: true
 *
 * const emptySet = new Set();
 * console.log(hasValuesFromArray(emptySet, myArray)); // Output: false
 */
function hasValuesFromArray(set, array) {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array');
  }
  return array.some((value) => set.has(value));
}

export default hasValuesFromArray;
