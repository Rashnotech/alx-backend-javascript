import fs from 'fs';

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
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
      resolve(groups);
    }
  });
});

export default readDatabase;
