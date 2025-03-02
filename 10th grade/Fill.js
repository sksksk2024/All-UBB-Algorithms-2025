// DFS
const floodFill1 = (image) => {
  let rows = image.length,
    cols = image[0].length;
  let color = 2;

  function dfs(r, c, originalColor, newColor) {
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      image[r][c] !== originalColor
    ) {
      return;
    }
    image[r][c] = newColor;
    dfs(r + 1, c, originalColor, newColor);
    dfs(r, c + 1, originalColor, newColor);
    dfs(r - 1, c, originalColor, newColor);
    dfs(r, c - 1, originalColor, newColor);
  }

  for (let i = 0; i < rows; ++i)
    for (let j = 0; j < cols; ++j) {
      if (image[i][j] === 1) {
        dfs(i, j, 1, color);
        color++;
      }
    }
  return image;
};
//////////////////////////////////////////////////
// BFS1
const floodFill2 = (image, sr, sc, newColor) => {
  let rows = image.length,
    cols = image[0].length;
  let originalColor = image[sr][sc];

  if (originalColor === newColor) return image;

  let queue = [[sr, sc]];
  let directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length > 0) {
    let [r, c] = queue.shift();
    image[r][c] = newColor;

    for (let [dr, dc] of directions) {
      let newR = r + dr,
        newC = c + dc;
      if (
        newR >= 0 &&
        newR < rows &&
        newC >= 0 &&
        newC < cols &&
        image[newR][newC] === originalColor
      ) {
        queue.push([newR, newC]);
      }
    }
  }

  return image;
};

// BFS2
const floodFill3 = (image) => {
  let rows = image.length,
    cols = image[0].length;
  let color = 2;

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const bfs = (sr, sc) => {
    let queue = [[sr, sc]];
    image[sr][sc] = color;

    while (queue.length > 0) {
      let [r, c] = queue.shift();
      for (let [dr, dc] of directions) {
        let newR = r + dr;
        let newC = c + dc;
        if (
          newR >= 0 &&
          newR < rows &&
          newC >= 0 &&
          newC < cols &&
          image[newR][newC] === 1
        ) {
          image[newR][newC] = color;
          queue.push([newR, newC]);
        }
      }
    }
  };

  for (let i = 0; i < rows; ++i)
    for (let j = 0; j < cols; ++j) {
      if (image[i][j] === 1) {
        bfs(i, j);
        color++;
      }
    }

  return image;
};

let image = [
  [1, 1, 0, 1, 0, 0],
  [1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 1],
];

console.log(floodFill3(image));
