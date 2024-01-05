#!/usr/bin/node

export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  set size(size) {
    if (typeof size === 'number') {
      this._size = size;
    } else {
      throw new TypeError('Size must be a number');
    }
  }

  get size() {
    return this._size;
  }

  set location(location) {
    if (typeof location === 'string') {
      this._location = location;
    } else {
      throw new TypeError('Location must be a string');
    }
  }

  get location() {
    return this._location;
  }

  toString() {
    return this.location;
  }

  valueOf() {
    return this.size;
  }
}
