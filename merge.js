function merge(arr1, arr2) {
  let sorted = [];
  let i = 0;
  let j = 0;
  // loop while i & j < than their respective arrays
  while ((i < arr1.length) && (j < arr2.length)) {
    if (arr1[i] <= arr2[j]) {
      sorted.push(arr1[i]);
      i++;
    } else {
      sorted.push(arr2[j]);
      j++;
    }
  }
  // if there are still elements in arr1, push to output until end
  while (i < arr1.length) {
    sorted.push(arr1[i]);
    i++;
  }
  // if there are still elements in arr2, push to output until end
  while (j < arr2.length) {
    sorted.push(arr2[j]);
    j++;
  }
  return sorted;
}

function mergeSort(arr) {
  // Base case: 0 or 1 elements already sorted
  if (arr.length <= 1) {
    return arr;
  }
  // split array in half
  let middle = Math.floor(arr.length / 2);
  // keep splitting in half recursively until arrays reach length of 1 and are returned
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

module.exports = { merge, mergeSort};