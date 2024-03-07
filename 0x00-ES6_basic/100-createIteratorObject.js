export default function createIteratorObject(report) {
  const iteratable = Object.values(report.allEmployees);
  let value = [];
  for (const val of iteratable) {
    value = [...value, ...val];
  }
  return value;
}
