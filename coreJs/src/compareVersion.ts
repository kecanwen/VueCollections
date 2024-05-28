export default (v1: string, v2: string): number => {
  const arr1 = v1.split('.').map(Number);
  const arr2 = v2.split('.').map(Number);
  const len = Math.max(arr1.length, arr2.length);
  let i = 0;
  while (i < len) {
    if (arr1[i] === arr2[i]) {
      i++;
      continue;
    }
    if (arr1[i] > arr2[i]) {
      return 1;
    } else {
      return -1;
    }
  }
  return 0;
};
