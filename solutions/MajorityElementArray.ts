// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2


function majorityElement(nums: number[]): number {
    nums.sort((n1, n2) => {
        if (n1 == n2) return 0;
        if (n1 > n2) return 1;
        else return -1;
    })
    let prevVal, currentOcc = 0, maxOcc = 0, maxOccuredVal = 0;
    for (let i = 0; i < nums.length; i++) {
        if (prevVal !== nums[i] || i == nums.length-1) {
            if(i==nums.length-1) currentOcc++;
            if (currentOcc > maxOcc) {
                maxOccuredVal = prevVal;
                maxOcc = currentOcc;
                currentOcc = 0;
            }
            prevVal = nums[i];
        }
        currentOcc++;
    }

    return maxOccuredVal;
};
console.log(majorityElement([3,2,3]));