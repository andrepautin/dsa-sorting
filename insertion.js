function insertionSort(arr) {
  // iterate over each element of array
  // check if it is larger than the one before it
  // if it is, it's in the right spot
  // if smaller, swap
  for (let i = 0; i < arr.length; i++) {
    // this will represent second element, assuming first is start of sorted
    let current = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = current;
  }
  return arr;
}

module.exports = insertionSort;