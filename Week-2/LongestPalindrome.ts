/*
Input: a string s consisting of lowercase and uppercase letters (case sensitive and letters can repeat)
Process: find and create the longest palindrome (pairs of characters and optional one leftover character in the center)
Output: return the length the longest palindrome

Thoughts:
    - A palindrome is symmetrical so every character we use must be in pairs
    - if there is an odd count for a character, we use the largest even count - 1 (5-1= 2 pairs)
    - if there is an odd count, add +1 for a center character (doesnt need a pair)

Solution 1: (sorting)
    - Sort the string characters
    - Count the number of same characters 
    - Use the pair + 1 middle character logic
This is not optimal as sorting requires O(n log n) time complexity and we can solve this without sorting

Solution 2: (hashmaps)
    - use a hashmap to count the character frequency
    - for each character: (frequency / 2) * 2 to find the largest even
    - track if any freq is odd by frequency % 2 !== 0
    - if an odd frequency exist, +1 for the center letter
    - return the length of the palindrome

Steps:
1. create a hashmap to count the char frequency <string, number>
2. for char of string:
    - add the frequency or default to 0
    - calculate Math.floor(frequency / 2) * 2 to the answer to find the largest even
    - track if any frequency is odd by frequency % 2 !== 0
3. if an odd exist, add +1 to the answer
4. return the palindrome.length
*/
function longestPalindrome(s: string): number {
    const hashMap = new Map<string, number>();

    for (const char of s) {
        const count = hashMap.get(char) || 0;

        hashMap.set(char, count + 1);
    }

    let length = 0;
    let hasOdds = false;
    for (const [char, count] of hashMap) {
        length += Math.floor(count / 2) * 2;
        
        if (count % 2 !== 0) {
            hasOdds = true;
        }
    }
    if (hasOdds) length += 1;
    return length 
};

/*
Time complexity: O(n)
    - traverse the string once to get frequency count
    - traverse the map once to find the palindrome length
    - number of unique characters is at most n
Space complexity: O(1)
    - we are bounded to use only lowercase and uppcase alphabet letters
    - constant space
*/