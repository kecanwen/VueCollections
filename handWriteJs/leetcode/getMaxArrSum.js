/* 
求给定数组的最大子数组和（动态规划）
*/
const getMaxArrSum = (nums) => {
    let maxCurrent = nums[0];
    let maxGlobal = nums[0];

    for(let i = 1; i < nums.length; i++) {
        maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
        if(maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent;
        }
    }

    return maxGlobal;
}