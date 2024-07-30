// 3-get_ids_sum.js

/**
 * Calculates the sum of student IDs in a given array of student objects.
 *
 * @param {Array<Object>} students - An array of student objects, each with an 'id' property.
 * @returns {number} The sum of all student IDs.
 * @throws {TypeError} If the input is not an array.
 *
 * @example
 * const students = [
 *   { id: 1, name: 'John' },
 *   { id: 2, name: 'Jane' },
 *   { id: 3, name: 'Bob' }
 * ];
 * console.log(getStudentIdsSum(students)); // Output: 6
 */

function getStudentIdsSum(students) {
    if (!(students instanceof Array)) {
        throw new TypeError('Argument must be an array');
    }
    return students.reduce((acc, student) => acc + student.id, 0);
}

export default getStudentIdsSum;