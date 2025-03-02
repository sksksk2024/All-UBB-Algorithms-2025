// 1.
function gen1(a, n) {
  let decr = n - 1;
  let incr = 0;

  // First part of the matrix (second diagonal area)
  for (let i = 0; i < n; ++i) {
    // i goes from 0 to n-1 (zero-based)
    for (let j = 0; j < n - i - 1; ++j) {
      // j ranges for the condition i + j <= n - 1
      if (i + j < n) {
        a[i][j] = decr;
        decr--;
      }
    }
    decr = n - i - 2;
  }

  // Second part of the matrix
  for (let i = 0; i < n; ++i) {
    // i goes from 0 to n-1
    for (let j = n - i - 1; j < n; ++j) {
      // j starts from n - i - 1 and goes to n
      if (i + j >= n) {
        a[i][j] = incr;
        incr++;
      }
    }
    incr = 1;
  }
}

// 2
function gen2(a, n) {
  let i, j;
  i = j = 0;
  let val = 1;
  while (val <= Math.pow(n, 2)) {
    while (j < n && a[i][j] === 0) a[i][j++] = val++;
    i++, j--;
    while (i < n && a[i][j] === 0) a[i++][j] = val++;
    i--, j--;
    while (j >= 0 && a[i][j] === 0) a[i][j--] = val++;
    i--, j++;
    while (i >= 0 && a[i][j] === 0) a[i--][j] = val++;
    i++, j++;
  }
}

function printMatrix(a, n) {
  for (let i = 0; i < n; ++i) {
    // i goes from 0 to n-1
    let row = '';
    for (let j = 0; j < n; ++j) {
      // j goes from 0 to n-1
      row += a[i][j] + ' ';
    }
    console.log(row);
  }
}

// Example usage:
let n = 4;
let a = Array.from({ length: n }, () => Array(n).fill(0));
gen2(a, n);
printMatrix(a, n);
