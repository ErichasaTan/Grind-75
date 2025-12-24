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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  /*
    Input: Given a Binary Search Tree (BST) and two nodes (p and q)
    Process: find their lowest common ancestor (deepest node in the tree that is an ancestor of both p and q)
    Output: Return the lowest common ancestor node

    Solution 1: (BST)
    At the current node, if node p's value and q's value is both less than the current value, then LCA must be in the LEFT subtree
    If both p and q's value is greater LCA must be in the right subtree
    Otherwise, they're on different sides OR one equals the current value, inwhich the current node is the LCA

    Steps:
    1. Set current node to the root
    2. While current is not null
        - initiate pv, qv and cv as the p value, q value and current value
        - if pv < cv and qv < cv, move current node to the left
        - if pv > cv and qv > cv, move current node to the right
        - else return the current node
    */

  let current = root;

  while (current != null) {
    let pv = p.val;
    let qv = q.val;
    let cv = current.val;

    if (pv < cv && qv < cv) {
      current = current.left;
    } else if (pv > cv && qv > cv) {
      current = current.right;
    } else {
      return current;
    }
  }
  /*
    Time complexity: O(h)
        - h being the height of the BST, only traverse a single path from the root to the split point
        - Balanced BST is O(log n)
        - Worst case is O(n)
    Space Complexity: O(1)
        - iterative approach with constant extra space
    */
}
