// 8-clean_set.js

/**
 * Cleans a set of strings by removing a specified start
 * string and joining the remaining values with a hyphen.
 *
 * @param {Set<string>} set - The set of strings to clean.
 * @param {string} startString - The string to remove from
 * the start of each value in the set.
 * @returns {string} The cleaned and joined string values.
 * @example
 * const mySet = new Set(['hello/world', 'hello/foo', 'bar/baz']);
 * const cleaned = cleanSet(mySet, 'hello/');
 * console.log(cleaned); // Output: "world-foo"
 */
function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') return '';

  const filteredStrings = [];
  set.forEach((s) => {
    if (typeof s === 'string' && s.startsWith(startString)) {
      filteredStrings.push(s.slice(startString.length));
    }
  });
  return filteredStrings.join('-');
}

export default cleanSet;
