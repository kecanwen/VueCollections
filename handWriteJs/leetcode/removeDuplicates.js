// ! 删除有序数组 重复项 26
const removeDuplicates = (arr) => {
    if(arr.length < 2) {
        return arr.length;
    }
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr.length;
}

// !  删除有序数组中的重复项 II    80
//* 出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度
const removeDuplicates2 = function(nums) {
    const n = nums.length;
    if (n <= 2) {
        return n;
    }
    let slow = 2, fast = 2;
    while (fast < n) {
        if (nums[slow - 2] != nums[fast]) {
            nums[slow] = nums[fast];
            ++slow;
        }
        ++fast;
    }
    return slow;
};

