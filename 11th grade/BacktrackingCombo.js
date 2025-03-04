// Permutations
// const lim = 3;
// const sol = new Array(lim);
// const added = new Array(lim + 1).fill(0);

// const display1 = () => {
//   console.log(sol.join(' '));
// };

// const backtracking1 = (pos) => {
//   for (let i = 1; i <= lim; ++i) {
//     if (added[i] === 0) {
//       added[i] = 1;
//       sol[pos - 1] = i;
//       if (pos === lim) display1();
//       else backtracking1(pos + 1);
//       added[i] = 0;
//     }
//   }
// };
///////////////////////////////////////////////////////////////////////////////////
// Arrangements
// let lim1, lim2;
// lim1 = 4;
// lim2 = 3;
// const sol = new Array(lim2);
// const added = new Array(lim1 + 1).fill(0);

// const display2 = () => {
//   console.log(sol.join(' '));
// };

// const backtracking2 = (pos) => {
//   for (let i = 1; i <= lim1; ++i) {
//     if (added[i] === 0) {
//       added[i] = 1;
//       sol[pos - 1] = i;
//       if (pos === lim2) display2();
//       else backtracking2(pos + 1);
//       added[i] = 0;
//     }
//   }
// };
///////////////////////////////////////////////////////////////////////////////////
// Combinations
// const n = 4;
// const k = 3;
// sol = new Array(k).fill(0);

// const display3 = () => {
//   console.log(sol.join(' '));
// };

// const backtracking3 = (pos) => {
//   for (let i = sol[pos - 1] + 1; i <= n - k + pos; ++i) {
//     sol[pos - 1] = i;
//     if (pos === k) display3();
//     else backtracking3(pos + 1);
//   }
// };
///////////////////////////////////////////////////////////////////////////////////
// Subsets
// const n = 4;
// const sol = [];

// const display4 = () => {
//   console.log(sol.join(' '));
// };

// const backtracking4 = (start) => {
//   for (let i = start; i <= n; ++i) {
//     sol.push(i);
//     display4(); // Show the current subset
//     backtracking4(i + 1); // Generate further subsets
//     sol.pop(); // Backtrack
//   }
// };
///////////////////////////////////////////////////////////////////////////////////
// Partitions
const n = 4;
const sol = new Array(n + 1).fill(0); // Array to store partition groups

const display5 = (nr_s) => {
  console.log('Partition:');
  for (let i = 1; i <= nr_s; ++i) {
    let subset = [];
    for (let j = 1; j <= n; ++j) {
      if (sol[j] === i) subset.push(j);
    }
    console.log(`{ ${subset.join(', ')} }`);
  }
  console.log('----------------');
};

const back = (pos, nr_s) => {
  for (let i = 1; i <= nr_s + 1; ++i) {
    sol[pos] = i; // Assign current number to partition group
    if (pos === n) display5(nr_s);
    else back(pos + 1, Math.max(nr_s, i));
    sol[pos] = 0; // Backtrack
  }
};
back(1, 0);

// More Efficient
const generatePartitions = (n) => {
  let sol = new Array(n + 1).fill(0);
  let partitions = [];

  const displayPatitions = (nr_s) => {
    let result = [];
    for (let i = 1; i <= nr_s; ++i) {
      let subset = [];
      for (let j = 1; j <= n; ++j) {
        if (sol[j] === i) subset.push(j);
      }
      result.push(`{ ${subset.join(', ')} }`);
    }
    partitions.push(result.join(' | '));
  };

  const backtrack = (pos, nr_s) => {
    if (pos > n) {
      displayPatitions(nr_s);
      return;
    }

    for (let i = 1; i <= nr_s + 1; ++i) {
      sol[pos] = i;
      backtrack(pos + 1, Math.max(nr_s, i));
    }
  };

  backtrack(1, 0);
  return partitions;
};

console.time('Optimized Partitioning');
const result = generatePartitions(6);
console.timeEnd('Optimized Partitioning');

console.log(result.join('\n'));
