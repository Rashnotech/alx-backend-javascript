import { Subjects } from './Subject.ts'

const cTeacher: Subjects.Teacher = {
  firstName: 'Rashnotech',
  lastName: 'Funded',
  experienceTeachingC = 10,
};


console.log('C++');
const cppSubject = new Subjects.Cpp();
cppSubject.setTeacher(cTeacher);

console.log(cppSubject.getRequirements());
console.log(cppSubject.getAvailableTeacher());

console.log('Java');
const javaSubject = new Subjects.Java();
javaSubject.setTeacher(cTeacher);
console.log(javaSubject.getRequirements());
console.log(javaSubject.getAvailableTeacher());

console.log('React');
const reactSubject = new Subjects.React();
reactSubject.setTeacher(cTeacher);
console.log(reactSubject.getRequirements());
console.log(reactSubject.getAvailableTeacher());
