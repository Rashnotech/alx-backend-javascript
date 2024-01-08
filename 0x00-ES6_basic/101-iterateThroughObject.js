export default function iterateThroughObject(reportWithIterator) {
  let iteratorResult = reportWithIterator.next();
  let output = '';
  while (!iteratorResult.done) {
    output += iteratorResult.value;
    iteratorResult = reportWithIterator.next();
    if (!iteratorResult.done) output += ' | ';
  }
  console.log(output);
}
