export default function updateUniqueItems(data) {
  if (!(data instanceof Map)) throw new Error('Cannot process');
  data.forEach((quantity, item) => {
    if (quantity === 1) data.set(item, 100);
  });
}
