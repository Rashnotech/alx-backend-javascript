#!/usr/bin/env node
/**
 * a function that count students
 */
const fs = require('fs');
const parse = require('csv-parse');

const countStudents = (fileName) => {
  try {
    const data = fs.readFileSync(fileName, 'utf8');
    parse(data, { columns: true }, (err, records) => {
      if (err) {
        throw new Error('Error parsing CSV');
      }

      const totalStudents = records.length;
      process.stdout.write(`Number of students: ${totalStudents}\n`);
      
      const fields = ['firstname', 'lastname', 'age', 'field'];
      for (const field of fields) {
        const fieldStudents = records.filter(student => student[field]);
        console.log(`Number of students in ${field}: ${fieldStudents.length}`);
        console.log(`List: ${fieldStudents.map(s => s[field]).join(', ')}\n`);
      }
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
