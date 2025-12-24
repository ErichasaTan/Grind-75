/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
  /*
    Input: head of a linked list
    Process: Traverse the linked list and detech whether there is a cycle, a previously seen node
    Output: Return a boolean, true if there is a cycle, otherwise return false

    solution 1: (Hash set)
    Travere the linked list and use a hashset to keep track of the visited nodes, if we vist the same node again, a cycle is detected and return true

    solution 2: (Floyd's Tortoise and Hare)
    This approach starts with two pointers, a slow and a fast from the head of the linked list
    We move the slow one node at a time and the fast two nodes at a time, If there is a cycle in the list, the two pointers will eventually meet at the same node
    If there is no cycle, the fast pointer will hit null, returning false

    Steps:
    1. Handle edge cases, if the list is empty or if the list has only one node, return false
    2. Initalize the two pointers: slow and fast, both start at the head
    3. Move the pointers at different speeds, slow moves one node at a time, fast moves two nodes at a time
    4. Loop through the list
        - continue until fast hits null and the next fast node is null
    5. Check if ever slow === fast, if it does return true
    6. If the loop exits without slow === fast, return false

    */

  if (!head || !head.next) return false;

  let slowP = head;
  let fastP = head;

  while (fastP !== null && fastP.next !== null) {
    slowP = slowP.next;
    fastP = fastP.next.next;
    if (slowP === fastP) return true;
  }
  return false;

  /*
    Time complexity: O(n), n is the number of nodes
        - In the worst case, pointers travers the list a linear number of times
    Space complexity: O(1)
        - Only two pointers are use, no extra memory
    */
}
