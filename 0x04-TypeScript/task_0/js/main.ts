interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Ini",
  lastName: "Ebong",
  age: 29,
  location: "Calabar",
};

const student2: Student = {
  firstName: "Aliyu",
  lastName: "Adekola",
  age: 30,
  location: "Lagos",
};

const studentsList:  Student[] = [student1, student2];


const table = document.createElement('table');
const studentRecord = studentsList.map(record => {
  const template = `<tr>
    <td> ${record.firstName} </td>
    <td> ${record.lastName} </td>
    <td> ${record.age} </td>
    <td> ${record.location} </td>
  </tr>`
  return template;
});


table.innerHtml = studentRecord;
document.body.appendChild(table);
