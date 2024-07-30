//  9-groceries_list.js

/**
 * Returns a map of groceries with their quantities.
 *
 * @returns {Map<string, number>}
 * A map where the keys are the names
 * of the groceries and the values are their quantities.
 *
 * @example
 * const groceries = groceriesList();
 * console.log(groceries.get('Apples')); // Output: 10
 * console.log(groceries.size); // Output: 5
 */
function groceriesList() {
  // Create a new map
  const groceries = new Map();

  // Add items to the map
  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);

  return groceries;
}

export default groceriesList;
