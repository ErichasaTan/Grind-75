# Author Eric & Manpreet
# Date: 7/25/24
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        # initialize the length of the array
        n = len(nums)
        # first for loop to iterate starting at [0]
        for x in range(n):
            # second for loop to iterate starting at [1]
            for y in range(x + 1, n):
                # if statement to check if the indexes add up to the target
                if (nums[x] + nums[y] == target):
                    # return the two sum
                    return [x, y]

first = Solution()
nums = [2,7,11,15]
target = 9 
first.twoSum(nums, target)
print(first.twoSum(nums, target))