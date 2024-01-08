export default function getListStudentIds(data) {
  if (Array.isArray(data)) return data.map((info) => info.id);
  return [];
}
