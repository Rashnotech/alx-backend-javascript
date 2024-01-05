#!/usr/bin/node

export default class Building {
  constructor (sqft) {
    if (this.constructor === Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this.sqft = sqft;
  }

  set sqft(sqft) {
    if (typeof sqft === 'number') {
      this._sqft = sqft;
    } else {
      throw new TypeError('SQFT must be a number');
    }
  }

  get sqft () {
    return this._sqft;
  }

  evacuationWarningMessage () {}
}
