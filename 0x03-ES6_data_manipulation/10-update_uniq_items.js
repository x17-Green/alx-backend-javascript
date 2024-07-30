// 10-update_uniq_items.js

/**
 * Updates the quantity of unique items in the map to 100.
 *
 * @param {Map} groceriesMap The map of groceries with their quantities.
 * @returns {Map} The updated map with quantities of unique items set to 100.
 * @throws {Error} Cannot process if the argument is not a map.
 */
function updateUniqueItems(groceriesMap) {
  if (!(groceriesMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [name, quantity] of groceriesMap) {
    if (typeof quantity === 'number' && quantity === 1) {
      groceriesMap.set(name, 100);
    }
  }

  return groceriesMap;
}

export default updateUniqueItems;
