#!/usr/bin/node
/**
 * modifying a function to instantiate using a js keyword
 * taskFirst
 * taskNext
 */

export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
