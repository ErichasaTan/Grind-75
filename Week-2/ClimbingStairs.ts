/*
Input: the number n representing steps it takes to reach the top of the staircase
Process: climing either 1 or 2 steps, figure out how many distinct ways to climb to the top
Output: number of distinct ways to climb to the top

Solution: (recursion)
We use brute force recursion and explore all paths, but this is inefficient becuase it recomputes overlapping subproblems

At step n, your last move was either:
    - a 1 step from n-1 or
    - a 2 step from n-2
climStairs(n) = climbStairs(n-1) + climbStairs(n-2)
This explores every possible path to the top using recursion

Solution 2: (Dynamic programming - fibonacci)
We can use dynamic programming and the fibonacci pattern to solve this more efficiently
The Fibonacci-style Dynamic programming algorithm computes the number of ways iteratively while keeping only the last two values.

Instead of exploring EVERY path, we:
    - build the answer bottom-up
    - store the results and never recompute them
Since we only need the previous two results, this results in constant memory

Steps:
1. if n is 0 or 1, return 1
2. if n is 2 return 2
3. initialize two variables
    - ways to reach previous step (1)
    - ways to reach the step before that (2)
4. Iterate from 3 to n, at each step
    - current = prev1 + prev2
    - shift variables forward
5. return the final result

*/
function climbStairs(n: number): number {
  if (n === 0 || n === 1) return 1;
  if (n === 2) return 2;

  let prev2 = 1; // previous step (1)
  let prev1 = 2; // before the previous step (2)

  for (let i = 3; i <= n; i++) {
    let current = prev1 + prev2;

    // shift the variables forward
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;

  // this is a fibonacci-style dynamic programming problem. the number of ways to reach step n equals the sum of the ways to reach steps n-1 and n-2. I compute it iteratively while keeping only the previous two values, giving O(n) time and O(1) space.
}

/*
Time complexity: O(n)
    - single loop from 3 to n
Space complexity: O(1)
    - constant space, only three variables regardless of n
*/
