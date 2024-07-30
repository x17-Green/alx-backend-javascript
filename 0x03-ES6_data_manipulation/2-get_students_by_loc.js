// 2-get_students_by_loc.js

/**
 * Retrieves a list of students based on their location.
 *
 * @param {Array<Object>} students - A list of student objects.
 * @param {string} city - The city to filter students by.
 *
 * @returns {Array<Object>} A list of student objects from the specified city.
 *
 * @example
 * const students = [
 *   { name: 'John Doe', location: 'New York' },
 *   { name: 'Jane Doe', location: 'Los Angeles' },
 *   { name: 'Bob Smith', location: 'New York' },
 * ];
 *
 * const studentsInNewYork = getStudentsByLocation(students, 'New York');
 * console.log(studentsInNewYork);
 * // Output:
 * // [
 * //   { name: 'John Doe', location: 'New York' },
 * //   { name: 'Bob Smith', location: 'New York' },
 * // ]
 */
function getStudentsByLocation(students, city) {
  if (!Array.isArray(students) || typeof city !== 'string') {
    return [];
  }
  return students.filter((students) => students.location === city);
}

export default getStudentsByLocation;
