/*
Input: an array nums of size n
Process: find the element that repeats the most, element that appears more than n/2
Output: a number: the majority element

Highlevel
We have to find the majority element given an array. If the array is [3,3,3,2,2,1], the output should be 3.

Solution 1: Hashmap frequency
Using a hashmap, we can count the frequency of each number, then return the one with count > n/2
    - Create the map to count nums
    - loop through nums and increment count
    - if the count > n/2, return that num

Solution 2: Boyer-Moore Voting Algorithm
Every time you see a different number, it cancels one occurence of your current majority candidate
The real majority element will survive until the end becuase it has more votes than all other elements 
The majority element occurs more than half the time, so it can't be fully canceled out by the other elements

Create two variables: candidate (the current majority element) and count (the number of votes)
We scan the array, if count is 0, the current eleemnt is the new candidate
if current element is the candidate, increment count
if else, we decrement count
At the end of the array, the remaining candidate is the majority element

Steps
1. Initialize candidate and count = 0
2. loop through nums:
    - if count === 0, candidate = nums[i]
    - if nums[i] === candidate, count++
    - else count--
3. return candidate
*/
function majorityElement(nums: number[]): number {
  let candidate;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
    }
    if (nums[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
}
/*
Conclusion
The majority element occurs more than all others combined, everytime we pair it against a different element, it still has leftover occurences
All the non-majoirty elements will eventually cancel out
This approach lets us track only one majority candidate and one count variable. No extra data structures are required

Time Complexity: O(n)
    - We scan the array only once
Space Complexity: O(1)
    - We only use two variables, candidate and count
*/
