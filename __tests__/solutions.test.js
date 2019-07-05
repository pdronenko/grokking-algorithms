import binarySearch from '../solutions';

test('binarySearch', () => {
  const list = [2, 5, 7, 12, 23, 78, 145, 523];
  expect(binarySearch(list, 23)).toBe(4);
  expect(binarySearch(list, 523)).toBe(7);
  expect(binarySearch(list, 52)).toBeNull();
});
