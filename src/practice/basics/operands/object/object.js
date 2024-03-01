'use strict';

export class ObjectSet {
  static 1(input) {
    if (typeof input === 'object') {
      return Object.entries(input);
    }

    return null;
  }

  static 2(input, propertyToDelete) {
    if (typeof input === 'object') {
      if (propertyToDelete) {
        if (input[propertyToDelete]) {
          delete input[propertyToDelete];

          return input;
        }
      }
    }

    return null;
  }
}
