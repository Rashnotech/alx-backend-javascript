#!/usr/bin/env node
/**
 * displayMessage - a function that display message
 * params: a string literal passed to be printed
 */

const displayMessage = (params) => {
  process.stdout.write(params + '\n');
}

module.exports = displayMessage
