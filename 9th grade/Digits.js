// Number of Digits
// iterative
const nrDigits = (num) => {
  cnt = 0;
  do {
    num = Math.floor(num / 10);
    cnt++;
  } while (num !== 0);

  return cnt;
};

// recursive
const nrDigitsRec = (num) => {
  if (num < 10) return 1;

  return 1 + nr_digits_rec(Math.floor(num / 10));
};

// Sum of the Digits
// I(iterative)
const sumDigits = (num) => {
  let sum = 0;
  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return sum;
};

// R(recursive)
const sumDigitsRec = (num) => {
  if (num < 10) return num;

  return (num % 10) + sumDigitsRec(Math.floor(num / 10));
};

// Mirror of a Number
// I
const mirror = (num) => {
  let m = 0;
  while (num !== 0) {
    m = (num % 10) + m * 10;
    num = Math.floor(num / 10);
  }

  return m;
};

// R
const mirrorRec = (num, m = 0) => {
  if (num === 0) return m;
  return mirrorRec(Math.floor(num / 10), 10 * m + (num % 10));
};

// Palindrome
const palindrome = (num) => {
  return num === mirror(num);
};

// I
const removeEvenDigits = (num) => {
  let p = 1,
    even = 0;
  while (num) {
    if (num % 2 === 0) {
      even = (num % 10) * p + even;
      p *= 10;
    }
    num = Math.floor(num / 10);
  }
  return even;
};

// R
const removeEvenDigitsRec = (num, p = 1) => {
  if (num < 10) {
    return num % 2 === 0 ? num * p : 0;
  }

  return num % 2 === 0
    ? (num % 10) * p + removeEvenDigitsRec(Math.floor(num / 10), p * 10)
    : removeEvenDigitsRec(Math.floor(num / 10), p);
};

// I
const doubleEvenDigits = (num) => {
  let p = 1;
  let even = 0;
  while (num !== 0) {
    if (num % 2 === 0) {
      even = even + (num % 10) * p;
      p *= 10;
    }
    even = even + (num % 10) * p;
    p *= 10;
    num = Math.floor(num / 10);
  }
  return even;
};

// R
const doubleEvenDigitsRec = (num) => {
  if (num === 0) return 0;

  return num % 2 === 0
    ? doubleEvenDigitsRec(Math.floor(num / 10)) * 100 + (num % 10) * 11
    : doubleEvenDigitsRec(Math.floor(num / 10)) * 10 + (num % 10);
};

// 1234 -> 2143
// I
const innerChangeDigits = (num) => {
  let p = 1,
    result = 0;

  while (num) {
    const d1 = num % 10;
    const d2 = Math.floor(num / 10) % 10;

    result = result + d1 * p * 10 + d2 * p;
    p *= 100;
    num = Math.floor(num / 100);
  }

  return result;
};

// R
const innerChangeDigitsRec = (num) => {
  if (num === 0) return 0;

  return (
    innerChangeDigitsRec(Math.floor(num / 100)) * 100 +
    (num % 10) * 10 +
    (Math.floor(num / 10) % 10)
  );
};
