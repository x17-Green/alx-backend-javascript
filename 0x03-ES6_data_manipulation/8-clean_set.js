// 8-clean_set.js

/**
 * Cleans a set of strings by filtering out strings that start with a specified start string
 * and then removing the start string from the remaining strings.
 *
 * @param {Set<string>} set - The set of strings to clean.
 * @param {string} startString - The string that the strings in the set should start with.
 * @returns {string} A string containing the cleaned strings joined by a hyphen.
 *
 * @example
 * const mySet = new Set(['hello world', 'hello universe', 'foo bar', 'hello earth']);
 * const cleanedString = cleanSet(mySet, 'hello ');
 * console.log(cleanedString); // Output: "world-universe-earth"
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