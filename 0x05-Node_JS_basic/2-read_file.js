const fs = require('fs');

const countStudents = (fileName) => {
  if (!fs.existsSync(fileName) || !fs.statSync(fileName).isFile()) {
    throw new Error('Cannot load the database');
  }
  const data = fs.readFileSync(fileName, 'utf8');
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

  console.log(`Number of students: ${total}`);
  for (const [field, group] of Object.entries(groups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
