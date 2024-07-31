# Author Eric & Manpreet
# Date: 7/30/24
# Time and Space Complexity: O(n) because it has one for loop.
class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        # Initialize a stack
        stack = []
        # Initialize a dictionary of the brackets
        brackets_dictionary = {"(":")", "[":"]", "{":"}"}
        # loop through the s string
        for x in s:
            # If the character x is one of the keys in brackets_dictionary 
            # (i.e., an opening bracket like (, [, or {), it gets pushed onto the stack.
            if x in brackets_dictionary.keys():
                # if true, append it to stack
                stack.append(x)
            # First, it checks if the stack is empty or if the top item in the stack (the last pushed opening bracket) 
            # does not match the current closing bracket. If either of these conditions is true, it returns False.
            #
            # If the character matches the corresponding closing bracket for the last opening bracket in the stack, 
            # the matching opening bracket is popped off the stack.
            elif x not in brackets_dictionary[stack.pop()]:
                return False
            # all else return True
            else:
                return True
