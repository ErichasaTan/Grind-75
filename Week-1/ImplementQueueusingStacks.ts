/*
A stack is a type of DS that utilizes a Last-In, First Out collection

Input: A sequence of opertaions: push(), pop(), peek(), empty()
Process: Only using these stack operations, implement a first in first out queue using only two stacks
Output: a FIFO queue

solution 1: (Two Stacks)
Using two stacks, we can have one stack handle incoming elements (push) and the second stack handle outgoing elements (pop, peek)
We push into the first stack, and only move elements to the second stack when needed

Steps:
1. Create two stacks, in and out
2. Push elements into the inStack
3. If outStack is empty, pop from inStack and push into outStack, return outStack when the inStack in empty
4. Peek to return the top of outStack, the same as pop but instead of popping, you're just peeking
5. The queue is empty if both stacks are empty

*/
class MyQueue {
  private inStack: number[];
  private outStack: number[];

  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  push(x: number): void {
    this.inStack.push(x);
  }

  pop(): number {
    if (this.outStack.length === 0) {
      while (this.inStack.length !== 0) {
        let val = this.inStack.pop()!; // ! is for incase its undefined
        this.outStack.push(val);
      }
    }
    return this.outStack.pop();
  }

  peek(): number {
    if (this.outStack.length === 0) {
      while (this.inStack.length !== 0) {
        let val = this.inStack.pop()!; // ! is for incase its undefined
        this.outStack.push(val);
      }
    }
    return this.outStack[this.outStack.length - 1];
  }

  empty(): boolean {
    return this.inStack.length === 0 && this.outStack.length === 0;
  }

  /*
    Time complexity: O(1)
        - Each element is pushed and popped at most once per stack, all operations are constant
    Space complexity: O(n)
        - In the worst case, the queue stores n elements
    */
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
