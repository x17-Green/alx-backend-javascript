export default function iterateThroughObject(reportWithIterator) {
  let employeeList = '';
  for (const employee of reportWithIterator) {
    employeeList += `${employee} | `;
  }
  return employeeList.slice(0, -3); // remove the trailing ' | '
}
