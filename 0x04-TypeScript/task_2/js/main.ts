interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}


interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
};


class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getToWork() {
    return 'Getting a coffee break';
  }

  workDirectorTask() {
    return 'Getting to director tasks';
  }
}


class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}


const createEmployee = (salary: number | string): Director | Teacher => {
  if (typeof salary === number && salary < 500) return Teacher;
  return  Director
}


type Employee = Director | Teacher;

const isDirector = (employee: Employee): employee is Director => {
    return employee;
}


const executeWork = (employee: Employee: string) => {
  if (employee === Director) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}
