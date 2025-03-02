const countingSort = (nums) => {
  const F = {};
  const result = [];
  for (const num of nums) {
    F[num] = (F[num] || 0) + 1;
  }

  for (const idx in F) {
    while (F[idx]) {
      result.push(Number(idx));
      F[idx]--;
    }
  }

  return result;
};

// How many distinct digits are in the array
const numDisNums = (nums) => {
  const F = {};
  let cnt = 0;

  for (let num of nums) {
    if (!F[num]) (F[num] = 1), cnt++;
  }

  return cnt;
};

// Sieve of Erathostenes
const erathostenes = () => {
  const lim = 1000000;
  const nums = {};
  const primes = [];

  nums[0] = nums[1] = 1;

  for (let i = 2; i * i <= lim; ++i) {
    if (!nums[i]) {
      for (let j = i * i; j <= lim; j += i) {
        nums[j] = 1;
      }
    }
  }

  for (let i = 2; i <= lim; ++i) {
    if (!nums[i]) primes.push(i);
  }

  return primes;
}; // O(n * loglog(n));

const factorisation = (num) => {
  const primes = Array.from(erathostenes());
  let d = 0;
  while (num > 1) {
    let p = 0;
    while (num % primes[d] === 0) p++, (num /= primes[d]);
    if (p) console.log(primes[d], '^', p);
    d++;
    if (primes[d] * primes[d] > num && num > 1)
      console.log(num, '^', 1), (num = 1);
  }
  return 'Done executing';
};

const isPrime = (num) => {
  if (num === 0 || num === 1) return false;
  const primes = Array.from(erathostenes());
  for (let i = 0; i * i <= num; ++i) {
    if (num % primes[i] === 0) return false;
  }
  return true;
};

const arr = [1, 2, 7, 5, 3, 2, 1, 3, 7, 5, 9];
console.log(isPrime(121));
