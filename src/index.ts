export default (arr: any[], n: number) => {
  if (n < 1) {
    throw new Error('The divider must be positive.');
  }
  if (n > arr.length) {
    throw new Error('The divider must be smaller than the length of the array.')
  }

  const k = Math.ceil(arr.length / n);
  const res = [];

  //
  while (arr.length > k) {
    res.push(arr.splice(0, k));
  }

  // push the remainder of original array to the final array
  res.push(arr);

  return res;
};
