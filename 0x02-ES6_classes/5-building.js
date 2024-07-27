// 5-building.js

// Implement a class named Building
class Building {
    // Constructor attribute
    constructor(sqft) {
      // Assign sqft to the _sqft attribute
      this._sqft = sqft;
      // Check if the subclass has implemented the evacuationWarningMessage method
      if (this.constructor !== Building && !this.constructor.prototype.evacuationWarningMessage) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  
    // Getter for sqft
    get sqft() {
      return this._sqft;
    }
  }
  
  // Export the Building class
  export default Building;