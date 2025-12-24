function isAnagram(s: string, t: string): boolean {
  /*
    Input: two strings, s and t
    Process: check if string t is an anagram of string s
    Output: return true if t is an anagram of s, false otherwise

    solution 1: (brute force & sorting)
    Sort the two strings and if they have the same length + same characters, they are an anagram
    Sorting each string: O(n log n)

    solution 2:
    First check if the lengths are equal, if not, immediately return false
    Count the character frequenceies using a hash map
    If both strings have the same character counts, they are anagrams and return true, otherwise false

    Steps:
    1. Check the lengths of both the strings, return false if not equal
    2. Create a frequency map (object) to track how many times each character appears
        - we increament counts of characters for s
        - we decreament counts of characters for t
        - if two strings are anagrams, the final count will be 0
    3. Loop through the length of the string
        - for string s, if the character already exists in the map 
            - increase the count
                - otherwise set its count to 1
        - for string t, if the character already exists in the map
            - decrease the count
                - otherwise set its count to -1
    4. loop through the map to check the count for each character, if its 0, return true, else return false
    */

  if (s.length !== t.length) return false;

  let charCounts: { [key: string]: number } = {};

  for (let i = 0; i < s.length; i++) {
    if (charCounts[s[i]] !== undefined) {
      charCounts[s[i]]++;
    } else {
      charCounts[s[i]] = 1;
    }

    if (charCounts[t[i]] !== undefined) {
      charCounts[t[i]]--;
    } else {
      charCounts[t[i]] = -1;
    }
  }

  for (const letter in charCounts) {
    if (charCounts[letter] !== 0) {
      return false;
    }
  }
  return true;

  /*
    Time Complexity: O(n)
        - One loop to go through both strings
        - One loop through the map (up to n worst case)
    Space Complexity: O(k)
        - k = number of distinct characters
        - worst case is all unique chracters --> k = n = O(n)
        - in this case of only lowercase letters it is O(1)
    */
}
