import getListStudents from './0-get_list_students';

// eslint-disable-next-line no-unused-vars
export default function getListStudentIds(getListStudents) {
  if (Array.isArray(getListStudents)) {
    const arrayById = getListStudents.map((obj) => obj.id);
    return arrayById;
  }
  return [];
}
