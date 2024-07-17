// index.js

class Circle {
    constructor(radius) {
      this._radius = radius;
    }
  
    // Getter and Setter for radius
    get radius() {
      return this._radius;
    }
    set radius(value) {
      this._radius = value;
    }
  
    // Setter and Getter for diameter
    set diameter(value) {
      this._radius = value / 2;
    }
    get diameter() {
      return this._radius * 2;
    }
  
    // Setter and Getter for circumference
    set circumference(value) {
      this._radius = value / (2 * Math.PI);
    }
    get circumference() {
      return 2 * Math.PI * this._radius;
    }
  
  
    set area(value) {
      this._radius = Math.sqrt(value / Math.PI);
    }
    get area() {
      return Math.PI * this._radius ** 2;
    }
  }
  
  module.exports = Circle;
  