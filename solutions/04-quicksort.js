const quickSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  const randomIndex = Math.floor(Math.random() * array.length);
  const pivot = array[randomIndex];
  const arrayWithoutPivot = array.filter((key, i) => i !== randomIndex);
  const keysAreLessPivot = arrayWithoutPivot.filter(key => key <= pivot);
  const keysAreMorePivot = arrayWithoutPivot.filter(key => key > pivot);
  return [...quickSort(keysAreLessPivot), pivot, ...quickSort(keysAreMorePivot)];
};

export default quickSort;
