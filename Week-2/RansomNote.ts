/*
Input: Two strings, ransomNote and magazine
Process: check if the ransomNote string can be constructed by using letters from the magazine string
Output: return true if so, otherwise return false

Solution: (brute force)
for each character in ransomNote, search for it in magazine
if found, remove that character, else return false

Solution 2: (Hashmap)
We can use a hashmap to track how many times each letter appears.
First we count the frequency of each character in magazine, then iterate through ransomNote and decrement the counts
If any character is missing or -1, return false, otherwise return true

Steps:
1. edgecase: if ransomNote.length > magazine.length, return false
2. create a map for character count
3. loop through magazine and count each character
4. loop through ransomNote
    - if a character is missing or count = 0, return false
    - else count decreases
5. if the loop finishes, return true

*/

function canConstruct(ransomNote: string, magazine: string): boolean {
  if (ransomNote.length > magazine.length) return false;

  let hashMap = new Map<string, number>();
  for (const char of magazine) {
    const count = hashMap.get(char) || 0;
    hashMap.set(char, count + 1);
  }

  for (const char of ransomNote) {
    const count = hashMap.get(char);
    if (!count) return false;
    else {
      hashMap.set(char, count - 1);
    }
  }
  return true;
}

/*
Time complexity: O(n + m)
    - n is the magazine length, m is the ransomNote length
    - one pass to count the magazine, one count to pass the ransomNote
Space complexity: O(1)
    - restricted to lowercase English letters (26) - constant space used
*/
