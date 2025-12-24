function search(nums: number[], target: number): number {
  /*
    Input: an array of integers that is already sorted in ascending order and an target integer
    Process: search for the target integer in the array of integers
    Output: if target exists, return its index, otherwise return -1

    solution 1: (brute force)
    iterate through the entire array until you find the target integer, return its index, otherwise return -1
    No optimal as you have to iterate through the entire array

    solution 2: (Binary Search)
    Because the array is already sorted, we can use binary search
    Keep two pointers left and right, and compute the mid = (left + right) / 2
    if the target is the middle index, return that index
    if the target < middle index, search the lower half of the array
    if the target > middle, search the upper half of the array
    repeat these steps until you find the index and return it or until left > right, which means target doesnt exist so return -1

    Steps:
    1. If array is empty, return -1
    2. initialize left = 0, right = array.length - 1
    3. loop for while left < right, mid = ((left + right) / 2)
    4. if mid = target, return array[mid]
    5. if nums[mid] > target --> move right
        - right = mid - 1
    6. if nums[mid] < target --> move left
        - left = mid + 1
    7. return -1 if you exit the loop
    */

  if (nums.length == 0) return -1;

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) return mid;

    if (nums[mid] > target) {
      right = mid - 1;
    }
    if (nums[mid] < target) {
      left = mid + 1;
    }
  }
  return -1;

  /*
    Time complexity: O(log n)
        - Binary search cuts the search space in half each time O(log n)
    Space complexity: O(1)
        - no recursion, no extra arrays, constant 
    */
}
