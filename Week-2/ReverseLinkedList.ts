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

/*
Input: head of a singly linked list, each node has val and next
Process: reverse the list
Output: the new reversed linked list

Highlevel
We can solve this problem iteratively using two pointers
To reverse it, we rewire every next pointer so it points to the previous node instead of the next
However, if i change the current.next before remembering where it originally pointed, i will lose the rest of the list
We have to track 3 things: 
    - prev: the previous node we came from
    - curr: the current node and where we are
    - next: the next node and where we are going to go

Solution
We will use two pointers to reverse the linked list, making sure to keep track of the next node before reversing
We will have the points prev and curr, prev will always start as null since its before the head of the node (null)
curr will be the head
We must create a temporary variable to hold the current node.next before reversing it so we can remember where we are in the linked list
Set the next node as the previous node, and move prev forward. Repeat until we reach null (the end of the original linked list), the last node before null is the new head.

Steps
1. If the list is empty or only has one node, return the list (it is already reversed)
2. initialize two pointers, prev = null, and curr = head
3. loop a while curr is not null
    - save the next node in a temp variable
    - reverse the pointers so the next node is previous
    - move prev forward, move curr forward
4. when the loop finishes, prev should be pointing at the new head, return prev

I iterate throught the list once and reverse the links in place using three pointers, prev, curr and next. I save the next node before flipping the pointer so I dont lose access to the rest of the list.
When the loop finishes, the previous pointer becomes the new head.
 */

function reverseList(head: ListNode | null): ListNode | null {
  if (!head || head.next === null) return head;

  let prev = null;
  let curr = head;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
}
/*
Time complexity: O(n)
    - Each node is visited once
Space complexity: O(1)
    - no new data strucutres, only 3 pointers

*/
