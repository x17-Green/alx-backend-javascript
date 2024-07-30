// 8-clean_set.js

/**
 * Cleans a set of strings by removing a specified start string and joining the remaining values with a hyphen.
 *
 * @param {Set<string>} set - The set of strings to clean.
 * @param {string} startString - The string to remove from the start of each value in the set.
 * @returns {string} The cleaned and joined string values.
 * @example
 * const mySet = new Set(['hello/world', 'hello/foo', 'bar/baz']);
 * const cleaned = cleanSet(mySet, 'hello/');
 * console.log(cleaned); // Output: "world-foo"
 */
function cleanSet(set, startString) {
  const filteredValues = [];
  if (startString == '' || typeof startString !== 'string') {
    return '';
  }
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      filteredValues.push(value.substring(startString.length));
    }
  }
  return filteredValues.join('-');
}

export default cleanSet;
