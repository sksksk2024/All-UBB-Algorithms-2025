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

console.log(sumDigitsRec(0));

// Min 10:00 (OGL)
