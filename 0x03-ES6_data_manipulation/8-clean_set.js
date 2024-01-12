export default function cleanSet(set, startString) {
  let found = '';
  if (startString === '' && typeof startString !== String) return found;
  for (const value of set) {
    if (value.startsWith(startString)) {
      found += `${value.replace(startString, '')}-`;
    }
  }
  return found.slice(0, -1);
}
