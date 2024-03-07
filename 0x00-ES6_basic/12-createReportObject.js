export default function createReportObject(employeesList) {
  const report = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments() {
      return Object.keys(report.allEmployees).length;
    },
  };
  return report;
}
