/* 
题目： 给定一个数组 nums 和一个目标值 target，在该数组中找出和为目标值的两个数
输入： nums: [8, 2, 6, 5, 4, 1, 3] ； target:7
输出： [2, 5]
*/
const findTwoSum = (nums ,target)=> {
    const numsMap = {};
    for (let index = 0; index < nums.length; index++) {
        const rest = target - nums[index];
        if(rest in numsMap){
            return [nums[index], rest]
        }
        numsMap[nums[index]] = nums[index];
    }
    return []
}
console.log(findTwoSum([8, 2, 6, 5, 4, 1, 3],7))