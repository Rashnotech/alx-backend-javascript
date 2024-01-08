export default function getStudentsByLocation(data, city) {
  if (Array.isArray(data)) {
    return data.filter((item) => item.location === city);
  }
  return [];
}
