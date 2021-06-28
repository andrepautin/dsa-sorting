function bubbleSort(arr) {
  console.log("UNSORTED ARR--->", arr);
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log("SORTED ARR--->", arr);
  return arr;
}

module.exports = bubbleSort;