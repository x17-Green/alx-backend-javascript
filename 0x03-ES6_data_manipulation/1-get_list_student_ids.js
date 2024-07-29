// 1-get_list_student_ids.js

/**
 * Returns a list of student IDs from an array of student objects.
 *
 * @param {Array<Object>} students 
 * - An array of student objects, each with an 'id' property.
 * @returns {Array<number>} 
 * - An array of student IDs. 
 * - If the input is not an array, an empty array is returned.
 *
 * @example
 * const students = [
 *   { id: 1, name: 'John Doe' },
 *   { id: 2, name: 'Jane Doe' },
 *   { id: 3, name: 'Bob Smith' },
 * ];
 * const studentIds = getListStudentIds(students);
 * console.log(studentIds); // [1, 2, 3]
 */

export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map(student => student.id);
}
