// 4-update_grade_by_city.js

/**
 * Updates the grades of students in a specific city.
 *
 * @param {Object[]} students - An array of student objects.
 * @param {string} city - The city for which to update the grades.
 * @param {Object[]} newGrades - An array of new grade objects.
 * @returns {Object[]} An array of student objects with updated grades.
 *
 * @example
 * const students = [
 *   { id: 1, name: 'John Doe', location: 'New York', grade: 'A' },
 *   { id: 2, name: 'Jane Doe', location: 'New York', grade: 'B' },
 *   { id: 3, name: 'Bob Smith', location: 'Chicago', grade: 'C' },
 * ];
 *
 * const newGrades = [
 *   { studentId: 1, grade: 'A+' },
 *   { studentId: 2, grade: 'B+' },
 * ];
 *
 * const updatedStudents = updateStudentGradeByCity(students, 'New York', newGrades);
 * console.log(updatedStudents);
 * // Output:
 * // [
 * //   { id: 1, name: 'John Doe', location: 'New York', grade: 'A+' },
 * //   { id: 2, name: 'Jane Doe', location: 'New York', grade: 'B+' },
 * // ]
 */

function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades) || typeof city !== 'string') {
    return [];
  }

  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const newGrade = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: newGrade ? newGrade.grade : 'N/A',
      };
    });
}

export default updateStudentGradeByCity;
