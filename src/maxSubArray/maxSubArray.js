// copied from https://leetcode.com/problems/maximum-subarray/

/*
  [-2,1,-3,4,-1,2,1,-5,4] => [4,-1,2,1] => 6
  [1, 2] => [1, 2] => 3
  [1, 2, -3] => [1, 2] => 3
  [-3, 1, 2] => [1, 2] => 3
*/

// function maxSubArray(nums) {
//   var prev = 0
//   var max = -Number.MAX_VALUE

//   for (var i = 0; i < nums.length; i++) {
//     prev = Math.max(prev + nums[i], nums[i])
//     max = Math.max(max, prev)
//   }
//   return max
// }

function maxSubArray(nums) {
  let result = [0]
  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      result[i] = nums[i]
    } else {
      result[i] = Math.max(nums[i], result[i - 1] + nums[i])
    }
  }
  return Math.max(...result)
}

module.exports = maxSubArray
