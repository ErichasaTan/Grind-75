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

function invertTree(root: TreeNode | null): TreeNode | null {
  /*
    Input: root of a binary tree
    Process: invert the tree (every node's left and right children are swapped)
    Output: the root of the inverted binary tree

    solution 1: (brute force)
    Travel the tree using BFS or DFS, and at every node, swap the left and right
    We must visit every node
    We must swap children at every node

    Solution 2: (recursive)
    For each node, swap its left and right children, then recursively invert the left subtree and the right subtree

    Steps:
    1. if root is null, return null
    2. swap the left root and right root
    3. recursively invert the new left root
    4. recursively invert the new right root
    5. return root

    */
  if (!root) return null;

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;

  /*
    Time complexity: O(n)
        - You visit each node exactly once, n is the number of nodes in the tree
        - Swapping nodes is only O(1)
    Space complexity: O(h)
        - h is the height of the tree
        - O(n) in the worst skewed tree case
        - O(log n) for a balanced tree
    */
}
