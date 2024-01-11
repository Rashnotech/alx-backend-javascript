namespace Students {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subjects {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      if(this.teacher && this.teacher.experienceTeachingReact) {
        return `Available Teacher: ${this.teacher.firstName}`
      } else return 'No available teacher';
    }
  }

}
