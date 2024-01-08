export default function getStudentIdsSum(value) {
  const ans = value.reduce((a, b) => a + b.id, 0);
  return ans;
}
