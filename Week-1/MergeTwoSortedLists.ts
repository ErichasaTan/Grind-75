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

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  /*
   Input: two singly linked lists, sorted in non-decreasing order
   Process: Merge the two linked lists, keeping it in non-decreasing order
   Output: a merged sorted list, returning the head of this new list


   Edge cases:
   1. One or both lists are empty
   2. All nodes of one list are smaller than the other
   3. Duplicate numbers
   4. Different lengths between the two lists
  
   Solution 1 (Brute force):
   Traverse both lists, push all the values into an array, sort it, then rebuild a linked list, returning the head.
   This is not ideal as the lists are already sorted and time and space complexity is not optimal.


   Solution 2 (Two-pointer merge):
   Since both lists are already sorted, I'll walk through them with two pointers and append the smaller current node to the merged list
   We'll need a pointer at the head of the merged list
   (when we start, we don't yet know which node will come first, it depends on which list has the smaller value).
   This is when we implement a 'dummy head', a plaeholder node created before starting the merge.
   We'll also need a tail pointer, it keeps track of the last node in the merged list. Everytime a node is appended, the tail moves forward.
   This ensures we always know where to attach the new node, don't have to traverse the list again to find the end, and the list stays properly linked at each step.


   Steps:
   1. Handle null paths
       - If one list is null, return the other immediately
   2. Create a dummy node and set tail = dummy
   3. Initialize pointers so p1 = list1, p2 = list2
   4. First loop:
       a. while both p1 and p2 are not null
           - compare p1 and p2 values
           - attach the smaller value to the tail pointer
           - Advance the pointer you used (if p1 was smaller, advance p1)
           - Advance the tail pointer to the next node
   5. Either p1 or p2 is not null now, appended the leftover list, it is already sorted
   6. Return the merged list head


   */

  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }

  let dummy = new ListNode(0);
  let tail = dummy;
  let p1 = list1;
  let p2 = list2;

  while (p1 !== null && p2 !== null) {
    // we use p1 and p2 here instead of list1 and list2 becuase lists are the original heads and the pointers are the moving cursors
    if (p1.val <= p2.val) {
      tail.next = p1; // attach the node at p1 after tail
      p1 = p1.next; // move p1 to the next node
      tail = tail.next; // once you attached a node after tail, move tail forward to that node
    } else {
      // dont need another else if since there are only two lists
      tail.next = p2;
      p2 = p2.next;
      tail = tail.next;
    }
  }
  tail.next = p1 ?? p2; // attach the remaining non-null since its already sorted
  return dummy.next; // this is the head of the merged list

  /*
   Time complexity: O(m+n)
        - m is number of nodes in list1
        - n is number of nodes in list2
        - Total iterations of the loop is m + n
    Space complexity: O(1)
        - We aren't creating any extra space like new lists or nodes.
   */
}
