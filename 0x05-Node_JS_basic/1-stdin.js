#!/usr/bin/env node
/**
 * a program that execute command line
 */
process.stdout.write(`Welcome to Holberton School, what is your name?\n`)
process.stdin.on('readable', function() {
  let name = process.stdin.read();
  if (name !== null) process.stdout.write(`Your name is: ${name}`);
});


process.stdin.on('end', function () {
  process.stdout.write('This important software is now closing\n');
});
