//Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

//Return the running sum of nums.//

//Input: nums = [1,2,3,4]
//Output: [1,3,6,10]
//Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

/**
 * @param {number[]} nums
 * @return {number[]}
 */

Arr = [1,2,3,4]

var runningSum = function(nums) {
    var sumArr = []
    sumArr.push(nums[0])
    let temp = nums[0]

    for ( let i = 1 ; i < nums.length ; i++){
        temp += nums[i]
        sumArr.push(temp)
    }

    return sumArr
    
};

console.log(runningSum(Arr))