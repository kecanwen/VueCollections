// 写一个冒泡排序
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// 写一个 选择排序
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; i++) {
        if()
      }
    }
    return arr;
  }
  
  let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  console.log(selectionSort(arr));


