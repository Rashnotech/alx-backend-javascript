export default function* createIteratorObject(report) {
    let departments = Object.keys(report.allEmployees);
    for (const department of departments) {
        const employees = report.allEmployees[department];
        yield* employees;
    }
}