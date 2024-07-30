// 6-set.js

/**
 * Creates a new Set from an array.
 *
 * @param {Array} arr - The input array to convert to a Set.
 * @throws {Error} If the input is not an array.
 * @returns {Set} A new Set containing the unique elements from the input array.
 *
 * @example
 * const arr = [1, 2, 2, 3, 4, 4, 5];
 * const set = setFromArray(arr);
 * console.log(set); // Output: Set { 1, 2, 3, 4, 5 }
 */
function setFromArray(array) {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array');
  }

  return new Set(array);
}

export default setFromArray;
