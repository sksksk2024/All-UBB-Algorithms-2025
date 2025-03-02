function leeAlgorithm(grid, sr, sc, dr, dc) {
  let rows = grid.length,
    cols = grid[0].length;

  if (grid[sr][sc] === 1 || grid[dr][dc] === 1) return -1;

  let directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let queue = [[sr, sc, 0]];
  let visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  visited[sr][sc] = true;

  while (queue.length > 0) {
    let [r, c, dist] = queue.shift();

    if (r === dr && c === dc) return dist;

    for (let [dr, dc] of directions) {
      let newR = r + dr,
        newC = c + dc;
      if (
        newR >= 0 &&
        newR < rows &&
        newC >= 0 &&
        newC < cols &&
        grid[newR][newC] === 0 &&
        !visited[newR][newC]
      ) {
        visited[newR][newC] = true;
        queue.push([newR, newC, dist + 1]);
      }
    }
  }

  return -1;
}

let grid = [
  [0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
];

console.log(leeAlgorithm(grid, 0, 0, 4, 4));
