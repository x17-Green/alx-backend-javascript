// 100-weak.js

/**
 * A WeakMap to store the load count of API endpoints.
 * @type {WeakMap<string, number>}
 */
const weakMap = new WeakMap();

/**
 * Query an API endpoint and track its load count.
 *
 * @param {string} endpoint - The API endpoint to query.
 * @returns {number} The current load count of the endpoint.
 * @throws {Error} If the endpoint load is high (>= 5).
 *
 * @example
 * queryAPI('/users'); // returns 1
 * queryAPI('/users'); // returns 2
 * queryAPI('/users'); // returns 3
 * queryAPI('/users'); // returns 4
 * queryAPI('/users'); // throws Error: Endpoint load is high
 */
function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  return count;
}

export { queryAPI, weakMap };
