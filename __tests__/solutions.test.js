import { binarySearch, selectionSort, factorial } from '../solutions';

test('binarySearch', () => {
  const list = [2, 5, 7, 12, 23, 78, 145, 523];
  expect(binarySearch(list, 23)).toBe(4);
  expect(binarySearch(list, 523)).toBe(7);
  expect(binarySearch(list, 52)).toBeNull();
});

test('selectionSort', () => {
  const list = [6, 26, 34, 2634, 3246, 12, 23424, -565, 468, 79, 8765, 787];
  const expectedResult = [-565, 6, 12, 26, 34, 79, 468, 787, 2634, 3246, 8765, 23424];
  expect(selectionSort(list)).toEqual(expectedResult);
  expect(selectionSort([0])).toEqual([0]);
  expect(selectionSort([])).toEqual([]);
});

test('factorial', () => {
  expect(factorial(1)).toBe(1);
  expect(factorial(9)).toBe(362880);
  expect(factorial(11)).toBe(39916800);
});
