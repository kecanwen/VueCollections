// !移除元素 27
const removeElement = (arr, val) => {
    let slow = 0;//定义一个慢指针
    for(let fast = 0; fast < arr.length; fast++) { //定义一个快指针
        if(arr[fast]!== val) {
            arr[slow] = arr[fast];
            slow++;
        }
    }
    return slow;
}