// ! 轮转数组 189
// * 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数
const rotateArray = (nums, k) => {
    const len = nums.length;
    k = k % len;
    const result = [];
    for(let i = 0; i < len; i++) {
        result.push(nums[(i + k) % len]);
    }
    return result;
}