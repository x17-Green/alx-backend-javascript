// Import the Building class from 5-building.js
import Building from './5-building.js';

// Implement a class named SkyHighBuilding that extends from Building
class SkyHighBuilding extends Building {
  // Constructor attributes
  constructor(sqft, floors) {
    // Call the parent class constructor with sqft
    super(sqft);
    // Assign floors to the _floors attribute
    this._floors = floors;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    // Return the evacuation warning message with the number of floors
    return `Evacuate slowly from floor: ${this._floors}`;
  }
}

// Export the SkyHighBuilding class
export default SkyHighBuilding;