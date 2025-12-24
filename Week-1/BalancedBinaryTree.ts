/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isBalanced(root: TreeNode | null): boolean {
  /*
    Input: Given the root of a binary tree
    Process: determine if the binary tree is height-balanced. A tree is height-balanced if for every node, the heigh difference between its left and right subtrees is at most 1
    Output: boolean, true if the binary tree is height-balanced, false if otherwise

    solution 1: (top-down height check)
    Compute the height of the left and right from the top down, if height(left) - height(right) > 1, it is not balanced
    Recursively check the left and right subtrees are balanced
    This works but recomputes heights repeatedly, we can optimize by computing height and balance in one pass

    solution 2: (bottom up DFS with early exit)
    Instead of recomputing heights, we can do a post-order (bottom-up) traversal where each recursive call returns
        - the height if the subtree is balanced
        - a fail if its unbalanced
    The moment we find an unbalanced subtree, we can stop

    Steps:
    1. helping function that checks if a node is null, returning 0 if the height is 0 
    2. recursively get:
        - the left height
            - if left height = -1, return -1
        - the right height
            - if right height = -1, return -1
    3. if left height - right height > 1, return fail (for every node, the height difference between its lleft and right subtrees is AT MOST 1)
    4. else return 1 + max(left height, right height) as the subtrees height (1 = current node, and either the height (longest left or right))
    5. the tree will be balanced if your helper function does not fail 
    */

  function check(node: TreeNode | null): number {
    if (!node) return 0;

    let leftHeight = check(node.left);
    if (leftHeight === -1) return -1;

    let rightHeight = check(node.right);
    if (rightHeight === -1) return -1;

    if (Math.abs(leftHeight - rightHeight) > 1) return -1;
    else return 1 + Math.max(leftHeight, rightHeight);
  }
  return check(root) !== -1;

  /*
    Time complexity: O(n)
        - Each node is visited only once
        - Work per node is constant
    Space complexity: O(h) h = height of the tree
        - recursion stack
        - Balanced tree: O(log n)
        - Skewed tree: O(n)
    */
}
