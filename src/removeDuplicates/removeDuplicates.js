var removeDuplicates = function(nums) {
  if (nums.length < 2) return nums

  let i_pointer = 0;

  while(i_pointer < nums.length-1) {
    if (nums[i_pointer] == nums[i_pointer+1]) {
      nums.splice(i_pointer, 1)
      i_pointer--
    }
    i_pointer++
  }
};

const nums = [0,0,1,1,2,3]
removeDuplicates(nums)
console.log('[nums]', nums)
