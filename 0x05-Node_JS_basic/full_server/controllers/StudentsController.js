import readDatabase from '../utils';

export default class StudentsController {
  constructor () {
    this.path = process.argv.length > 2 ? process.argv[2] : '';
  }

  static getAllStudents (req, res) {
    readDatabase(this.path)
      .then((groups) => {
        const text = ['This is the list of our students'];
        const sortUtil = (a, b) => {
          if (a[0].toLowerCase() < b[0].toLowerCase()) return -1;
          if (a[0].toLowerCase() > b[0].toLowerCase()) return 1;
          return 0;
        };

        for (const [field, group] of Object.entries(groups).sort(sortUtil)) {
          const names = group.map((student) => student.firstname).join(', ');
          text.push(`Number of students in ${field}: ${group.length}. List: ${names}`);
        }
        res.status(200);
        res.send(text.join('\n'));
      })
      .catch((err) => {
        res.status(500);
        res.send(err instanceof Error ? err.message : err.toString());
      });
  }

  static getAllStudentsByMajor (req, res) {
    const { major } = req.params;
    if (major !== 'SWE' || major !== 'CS') {
      res.status(500);
      res.send('Major parameter must be CS or SWE');
    }
    let response = '';
    readDatabase(this.path)
      .then((groups) => {
        if (Object.keys(groups).includes(major)) {
          const students = groups[major].map((student) => student.firstname).join(', ');
          response = `List: ${students}`;
        }
        res.status(200);
        res.send(response);
      })
      .catch((err) => {
        res.status(500);
        res.send(err instanceof Error ? err.message : err.toString());
      });
  }
}
