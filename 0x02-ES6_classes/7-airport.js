// 7-airport.js

/**
 * Represents an airport with a name and a unique code.
 */
export default class Airport {
  /**
     * Initializes a new instance of the Airport class.
     * @param {string} name - The name of the airport.
     * @param {string} code - The unique code of the airport.
     */
  constructor(name, code) {
    /**
       * The name of the airport.
       * @type {string}
       * @private
       */
    this._name = name;
    /**
       * The unique code of the airport.
       * @type {string}
       * @private
       */
    this._code = code;
  }

  /**
     * Returns a string representation of the airport.
     * @returns {string} A string in the format `[object ${code}]`.
     */
  toString() {
    return `[object ${this._code}]`;
  }

  /**
     * Gets the symbol toStringTag value for the airport.
     * @returns {string} The unique code of the airport.
     */
  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
