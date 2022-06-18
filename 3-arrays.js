function getSecondLargest(nums) {
  // Complete the function
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (max < nums[i]) max = nums[i];
  }
  nums = nums.filter((n) => n !== max);

  max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (max < nums[i]) max = nums[i];
  }

  return max;
}
