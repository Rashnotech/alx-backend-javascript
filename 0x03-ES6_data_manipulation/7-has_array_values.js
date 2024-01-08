export default function hasValuesFromArray(set, arr) {
  let trutty = false;
  for (const value of arr) {
    trutty = set.has(value);
  }
  return trutty;
}
