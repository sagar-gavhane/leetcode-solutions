// https://leetcode.com/problems/search-insert-position/

const searchInsert = (nums, target) => {
  // sorted nums array
  // [1, 3, 4, 5, 6], 5
  // [1, 3] [5, 6]
  // a   b

  let left = 0
  let right = nums.length - 1
  let middle = -1

  while (left <= right) {
    middle = Math.floor((left + right) / 2)

    if (nums[middle] == target) {
      break
    }

    if (target < nums[middle]) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }

  console.log(middle)
}

searchInsert([1, 3, 4, 5, 6], 6)
