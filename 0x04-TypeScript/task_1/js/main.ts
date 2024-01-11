interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
};

interface Directors extends Teacher {
  numberOfReports: number;
};

const printTeacher = (firstName: string, lastName:string): string => {
  return firstName.charAt(0) + '. ' + lastName;
};

interface printTeacherFunction {
  printTeacher: (firstName: string, lastName: string) => string;
};

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
};

interface StudentClass {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
};


class StudentClass implements StudentClass{
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}
