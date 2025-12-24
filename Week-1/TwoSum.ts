function twoSum(nums: number[], target: number): number[] {
  /*
        Input: array of integers and an integer (nums and target)
        Process: array[i] + array[j] === target
        Output: array[i, j]

        Solution 1 (Brute force):
        We can try each of the indicies together until we match the target.
        1. Loop through the array for i
        2. For each i, loop through the array for j, which would be (i+1)
        3. if array[i] + array [j] === target, return array[i, j]
        
        This solution uses just the array.
        Time complexity: O(n^2)
        The outter loop runs n times and each iteration we run the inner loop up to n times in the worst case.

        Space complexity: O(1)
        We use a constant amount of memory, the single array. The extra space remains constant regardless of input size.

        This solution is not optimal because we have to repeatedly re-scan the array.
    */

  // for (let i = 0; i < nums.length; i++) {
  //     for (let j = i+1; j < nums.length; j++) {
  //         if (nums[i] + nums[j] === target) {
  //             return [i, j]
  //         }
  //     }
  // }

  /*
    Solution 2: Hashmap (Optimal)
    We can use a hash map to find the complement to each element nums[i].
    Key: value from the array (nums[i])
    Value: its index i
    This allows us to scan the array just once and find the complement to i so that i + j === target
    so nums[j] === target - nums[i]
    For each element, I find its complement by doing (target - nums[i]) and check whether that complement has already been seen

    Algorithm:
    1. Create an empty hashmap
    2. Iterate through the array
    3. For each number:
        - compute its complement (target - nums[i])
        - if the complement exists in the map, return those two indices [i, j]
        - else store the current value with its index
    4. This works because the complement must appear earlier in the array to avoid using the same index twice
    */

  let HashMap = new Map<number, number>(); // <value, index>

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const complement = target - current;

    // Check the complement before inserting the current value to avoid pairing the number with itself
    if (HashMap.has(complement)) {
      let j = HashMap.get(complement);
      return [j, i];
    } else {
      HashMap.set(current, i);
    }
  }

  /*
    Time complexity: O(n)
        - We iterate through the array once O(n)
        - Each hashmap lookup and insert is O(1)
    Space complexity: O(n)
        - In the worst case, we insert every element into the hashmap before finding a pair
        - So extra space is O(n)
    */
}
