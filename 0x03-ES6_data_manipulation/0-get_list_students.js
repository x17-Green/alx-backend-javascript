// 0-get_list_students.js

/**
 * Returns a list of student objects.
 *
 * @returns {Array<Object>} A list of student objects,
 * each containing id, firstName, and location properties.
 *
 * @example
 * const students = getListStudents();
 * console.log(students);
 * // Output:
 * // [
 * //   { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
 * //   { id: 2, firstName: 'James', location: 'Columbia' },
 * //   { id: 3, firstName: 'Guillaume', location: 'San Francisco' },
 * // ]
 */
function getListStudents() {
  const students = [
    {
      id: 1,
      firstName: 'Guillaume',
      location: 'San Francisco',
    },
    {
      id: 2,
      firstName: 'James',
      location: 'Columbia',
    },
    {
      id: 5,
      firstName: 'Guillaume',
      location: 'San Francisco',
    },
  ];

  return students;
}

export default getListStudents;
