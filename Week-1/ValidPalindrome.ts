function isPalindrome(s: string): boolean {
  /*
    Input: string s contianing uppercase, lowercase and non-alphanumeric characters
    Process: convert all uppercase into lowercase and remove non-alphnumeric characters, reverse the string
    Output: true if the string is a palindrome and false otherwise (boolean)

    solution 1: (brute force)
    Create a empty string 'clean' and loop through each character in the string
    If it is alphanumeric, convert it to lowercase and add it to the 'clean' string
    To check the palindrome we can use a reverse function (or build it)

    solution 2: Two pointers
    We can use two pointers 'left' and 'right', starting at both ends of the string and move them inwards while skipping the non-alphanumeric characters
    This allows us to only iterate the string once and not have to create a new string

    Steps:
    1. initalize the pointers left and right
        - left = 0 and right = string.length - 1
    2. Loop through string
        - while left < right
            - move left pointer until left >= right or a non-alphanumeric character
            - move right pointer until left >= right or a non-alphnumeric character
    3. While both left and right pointers are alphanumeric
        - compare left pointer value = right pointer value
        - if it doesn't match, return false
        - if they are a match, we move each pointer (left++, right--)
    4. If the loop finishes, return true

    */
  function isAlphanumeric(c: string): boolean {
    return (
      ("a" <= c && c <= "z") || ("A" <= c && c <= "Z") || ("0" <= c && c <= "9")
    );
  }

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }
    while (left < right && !isAlphanumeric(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() != s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;

  /*
    Time complexity: O(n)
        - each pointer only move forward or backwards, and never resets
        - each character is visited once
    Space complexity: O(1)
        - we did not build any new string or arrays, everything is constant
    */
}
