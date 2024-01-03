export default function createReportObject(employeesList) {
  return {
    allEmployees: {...employeesList},
    getNumberOfDepartment(employeesList) {
      const departments = Object.keys(employeesList);
      return departments.length;
    },
  };
}
