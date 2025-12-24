function isValid(s: string): boolean {
  /*
    Input: string containing just bracket characters
    Process: determine if the input string is valid, having both opening and closing bracket in the correct order
    Output: true or false (boolean) if the criteria is met

    Solution 1:
    Can I brute force it? I can check by scanning through the string for matching brackets but this doesn't check for order correctness
    So brute force would NOT work

    Solution 2: Stack
    If I read the string from left to right, I would need to remember the starting bracket and go through the string to find its closing bracket
    A stack uses Last-In, First-Out (LIFO), We start by pushing the first opening bracket, then keep going for all opening brackets.
    If all opening brackets are pushed, we check the closing brackets. If the next closing bracket doesn't match the last opening bracket, it fails.

    When we see a closing bracket, it must match the most recently pushed opening bracket (the one on top of the stack)
    If it doesn't, return false immediately

    Steps:
    1. Create a stack, and a set containing brackets
    2. loop through the string
    3. handle opening vs closing
    3. handle mismatch
    4. return results (boolean)
    */

  const stack: string[] = [];
  const openingBrackets = new Set(["(", "[", "{"]);
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of s) {
    if (openingBrackets.has(char)) {
      stack.push(char);
      continue; // move on to the next character
    } else if (char in pairs) {
      const expectedOpening = pairs[char];
      const lastOpening = stack.pop();

      if (expectedOpening === lastOpening) {
        continue;
      }

      if (expectedOpening !== lastOpening) {
        return false;
      }
    }
  }
  return stack.length === 0;

  /*
    Time complexity: O(n)
        - Loop through the string once
        - Each character is processed in O(1)
    Space complexity: O(n)
        - In the worst case, all the brackets are opening brackets so every character is pushed into the stack
        - The stack can grown to size n so O(n) extra space
    */
}
