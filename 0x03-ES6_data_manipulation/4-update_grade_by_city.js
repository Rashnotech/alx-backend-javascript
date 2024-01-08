export default function updateStudentGradeByCity(datas, city, newGrades) {
  if (Array.isArray(datas)) {
    const upgrade = datas.filter((data) => data.location === city);
    return upgrade.map((peop) => {
      const grades = newGrades.filter((grd) => grd.studentId === peop.id);
      const x = { ...peop, grade: grades.length > 0 ? grades[0].grade : 'N/A' };
      return x;
    });
  }
  return [];
}
