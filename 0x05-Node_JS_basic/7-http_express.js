const fs = require('fs');
const express = require('express');

const dbFile = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (fileName) => new Promise((resolve, reject) => {
  fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) reject(new Error('Cannot load the database'));
    if (data) {
      const cols = data.trim().split('\n');
      const fieldNames = cols[0].split(',');
      const studentField = fieldNames.slice(0, fieldNames.length - 1);
      const groups = {};
      for (const row of cols.slice(1)) {
        const studentInfo = row.split(',');
        const studentValue = studentInfo.slice(0, studentInfo.length - 1);
        const field = studentInfo[studentInfo.length - 1];
        if (!Object.keys(groups).includes(field)) groups[field] = [];
        const entries = studentField
          .map((fieldName, idx) => [fieldName, studentValue[idx]]);
        groups[field].push(Object.fromEntries(entries));
      }
      let total = 0;
      for (const group of Object.values(groups)) total += group.length;
      const response = [];
      response.push(`Number of students: ${total}`);
      for (const [field, group] of Object.entries(groups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        response.push(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }
      resolve(response.join('\n'));
    }
  });
});

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const text = ['This is the list of our students'];
  countStudents(dbFile)
    .then((students) => {
      text.push(students);
      const respond = text.join('\n');
      res.send(Buffer.from(respond));
    }).catch((err) => {
      text.push(err instanceof Error ? err.message : err.toString());
      const response = text.join('\n');
      res.send(Buffer.from(response));
    });
});

app.listen(1245);

module.exports = app;
