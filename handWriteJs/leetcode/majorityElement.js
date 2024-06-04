// !169. 多数元素
// * 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素
const majorityElement = (nums) => {
    if (nums.length === 1) {
        return nums[0];
    }
    const map = new Map();
    for (let num of nums) {
        if (!map.get(num)) {
            map.set(num, 1);
        } else {
            map.set(num, map.get(num) + 1);
            if (map.get(num) > nums.length / 2) {
                return num;
            }
        }
    }
}