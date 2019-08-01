const findSmallestIndex = (arr) => {
  let smallestEl = arr[0];
  let smallestIndex = 0;
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < smallestEl) {
      smallestEl = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

export default (arr) => {
  const sortedArray = [];
  const arrCopy = arr.slice();
  for (let i = 0; i < arr.length; i += 1) {
    const smallestIndex = findSmallestIndex(arrCopy);
    const [smallestEl] = arrCopy.splice(smallestIndex, 1);
    sortedArray.push(smallestEl);
  }
  return sortedArray;
};
