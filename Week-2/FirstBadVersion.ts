/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

/*
Input: n, a number representing versions
Process: call 'isBadVersion' to find the first bad version (which causes all the following ones to be bad)
Output: the n version number of the first bad version

Solution: (brute force)
Loop through versions 1 to n and check if its a bad version
The first time isBadVersion(i) returns true, return i

Solution 2: (Binary Search)
Since each version is developed based on the previous version, its technically sorted
so we'd use binary search to search for the version that is bad

Steps:
1. Set left = 1, right = n
2. while left < right
3. calculate mid
4. if mid is bad, the first bad version is either mid or left
5. move right = mid
6. if mid is good, the first bad version is right
7. move left = mid + 1
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let left = 1;
    let right = n;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);

      if (isBadVersion(mid) === true) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };
};

/*
Time complexity: O(log n)
    - cuts the search in half each iteration
    - binary search is always O(log n)
Space complexity:O(1)
    - constant number of variables
    = no additional data structures
*/
