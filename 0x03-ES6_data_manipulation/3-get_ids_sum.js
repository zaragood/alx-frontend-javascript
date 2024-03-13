export default function getStudentIdsSum(studentsId) {
  if (Array.isArray(studentsId)) {
    return studentsId.reduce((accumulator, currentStudent) => accumulator + currentStudent.id, 0);
  }
  return 0;
}