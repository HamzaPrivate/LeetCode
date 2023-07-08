//Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
/**
 Do not return anything, modify nums in-place instead.
 */
 function rotate(nums: number[], k: number): void {
    for(let i = 0; i<k; i++){
        nums.unshift(nums[nums.length-1]);
        nums.pop();
    }
};