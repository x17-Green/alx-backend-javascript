// 5-typed_arrays.js

/**
 * Creates a new Int8Array typed array with the specified length,
 * sets the value at the given position, and returns a DataView
 * object representing the array.
 *
 * @param {number} length The length of the typed array.
 * @param {number} position The position at which to set the value.
 * @param {number} value The value to set at the specified position.
 * @returns {DataView} A DataView object representing the typed array.
 * @throws {Error} If the position is outside the range of the array.
 *
 * @example
 * const createInt8TypedArray = require('./5-typed_arrays');
 * const dataView = createInt8TypedArray(10, 5, 42);
 * console.log(dataView.getInt8(5)); // 42
 */

function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const arrayBuffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(arrayBuffer);

  int8Array[position] = value;

  return new DataView(arrayBuffer);
}
export default createInt8TypedArray;
