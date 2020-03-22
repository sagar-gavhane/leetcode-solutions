const removeElement = (nums, val) => {
  let ptr = 0
  while (ptr < nums.length) {
    if (nums[ptr] === val) {
      nums.splice(ptr, 1)
    } else ptr++
  }
  return nums.length
}

var nums = [3, 2, 2, 3]
const result = removeElement(nums, 3)
console.log(nums)
