export default function getListStudentIds(data) {
  if (Array.isArray(data)) return arr.map(info => info.id);
  return []
}
