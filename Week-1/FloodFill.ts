function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  /*
    Input: image[][] (m x n grid) and three integers, sr (starting row), sc (starting column), and newColour
    Process: Perform flood fill, where you change the starting original colour of the starting pixel and all pixels connected 4-directionally (up, down, left, right) that have the same original colour 
    Output: the same image[][] but with the flood fill applied 

    Solution 1: (DFS / backtracking)
    Although this is a 2D array question, it is really a hidden graph question at its core
    Starting from one position, visit all connected positions that satisfy a condition (graph traversal)
    Graph Traversal:
        - Each cell = a node
        - Each cell has up to 4 neighbors = edges
        - The condition = same original colour
    There are two solutions to traverse all reachable nodes from a start node: DFS or BFS, this case we are using DFS
    DFS:
        1. Visit a cell
        2. Mark it as visitied (recolour it)
        3. Visit all neighbours
        4. Repeat until no neighbors are valid
        5. Backtrack
    
    Steps:
    1. Record the original colour
    2. Edge case: if the original colour is the same as the new colour, return the same image[][]
    3. create a recursive helper: Given a cell (row, column)
        - Check if its in bounds (common pattern in DFS/BFS), if r/c out of bounds, return
            - Valid row: 0 <= r < m
            - Valid col: 0 <= c < n
            - (r < 0 || r >= m || c < 0 || c >= n)
        - Check if it has the original colour, if it does not, return
        - Recolour cell it to newColour
        - Recurse on its 4 neighbors (up, down, left, right)
    */

  const originalColour = image[sr][sc];
  const m = image.length;
  const n = image[0].length;

  if (originalColour == color) return image;

  function dfs(r: number, c: number) {
    if (r < 0 || r >= m || c < 0 || c >= n) return;

    if (image[r][c] !== originalColour) return;

    image[r][c] = color;
    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  }
  dfs(sr, sc);
  return image;

  /*
    Time complexity: O(m * n)
        - In the worst case, everthing is the original colour, DFS will visit and recolour every cell once
    Space complexity: O(m * n)
        - Worst case recursion depth can go up to m * n
    */
}
