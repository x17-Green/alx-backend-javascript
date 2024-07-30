// 8-clean_set.js

/**
 * Cleans a set of strings by removing a specified start
 * string and returns the cleaned set as a hyphen-separated string.
 *
 * @param {Set} set - The set of strings to be cleaned.
 * @param {string} startString - The string to be removed from \
 * the start of each string in the set.
 * @returns {string} A hyphen-separated string of the cleaned set.
 *
 * @example
 * const mySet = new Set(['hello-world', 'hello-universe', 'foo-bar']);
 * const cleanedSet = cleanSet(mySet, 'hello-');
 * console.log(cleanedSet); // Output: "world-universe"
 */
function cleanSet(set, startString) {
  const filteredValues = [];
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      filteredValues.push(value.substring(startString.length));
    }
  }
  return filteredValues.join('-');
}

export default cleanSet;
