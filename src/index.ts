export const groupArrayElements = (arr: any[], n: number) => {
  if (n < 1) {
    throw new Error('The divider must be positive.');
  }
  if (n > arr.length) {
    throw new Error('The divider must be smaller than the length of the array.');
  }

  // k = number of elements which should be in each new group.
  // if arr.length is not perfectly divisible by "n",
  // Math.ceil allows us to obtain a remainder
  const k = Math.ceil(arr.length / n);
  const res = [];

  // Extract "k" elements from original array and push to the "res" array
  while (arr.length > k) {
    res.push(arr.splice(0, k));
  }

  // push the remainder of original array to the final array
  if (arr.length > 0) {
    res.push(arr);
  }

  return res;
};
