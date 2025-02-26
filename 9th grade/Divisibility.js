// Consoling Divisors
const consoling1 = (num) => {
  const arr = [];
  for (let i = 1; i <= num; ++i) {
    arr.push(i);
  }

  const results = arr.filter((div) => arr[arr.length - 1] % div === 0);

  return results.join(', ');
};

const consoling2 = (num) => {
  const arr = [],
    result = [];
  for (let i = 1; i * i <= num; ++i) arr.push(i);
  for (const div of arr) {
    if (num % div === 0 && div < num / div) {
      result.push(div, num / div);
    } else if (num % div === 0) {
      result.push(div);
    }
  }
  return result;
};

const consoling3 = (num) => {
  const arr = [],
    result = [];
  for (let i = 1; i * i <= num; ++i) arr.push(i);
  for (const div of arr) {
    if (num % div === 0 && div < num / div) {
      result.push(div);
    } else if (num % div === 0) {
      result.push(div);
    }
  }
  for (let i = arr.length - 1; i >= 0; --i) {
    if (num % i === 0 && i < num / i) {
      result.push(num / i);
    }
  }
  return result;
};

const consoling3Rec1 = (num, div, result = []) => {
  if (div > Math.sqrt(num)) return result.sort((a, b) => a - b);

  if (num % div === 0) {
    result.push(div);
    if (div !== num / div) {
      result.push(num / div);
    }
  }

  return consoling3Rec(num, div + 1, result);
};

const consoling3Rec2 = (num, div, first = [], second = []) => {
  if (div > Math.sqrt(num)) return [...first, ...second.reverse()];

  if (num % div === 0) {
    first.push(div);
    second.push(num / div);
  }

  return consoling3Rec2(num, div + 1, first, second);
};

// Prime Number Test / Number of Divisors(just by returning simply cnt or nrDiv)
const prime1 = (num) => {
  let cnt = 0;
  for (let i = 1; i <= num; ++i) {
    if (num % i === 0) cnt++;
  }

  return cnt === 2;
};

const prime2 = (num) => {
  let cnt = 2;
  if (num % 2 === 0 && (num < 2 || num > 2)) {
    return false;
  }
  let i = 3;
  for (; i * i < num; i += 2) {
    if (num % i === 0) cnt += 2;
  }

  if (i * i === num) cnt++;

  return cnt === 2 || num === 2;
};

const prime3 = (num) => {
  if (num < 2) return false;
  if (num > 2 && num % 2 === 0) return false;
  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

const prime4 = (num) => {
  let d = 2,
    p = 0,
    nrDiv = 1;
  while (num > 1) {
    while (num % d === 0) (num /= d), p++;
    nrDiv *= p + 1;
    d++;
    if (d * d > num) d = num;
  }

  return nrDiv === 2;
};

// R
const prime1Rec = (num, div, cnt = 0) => {
  if (div * div > num) return cnt === 2;
  return num % div === 0
    ? prime1Rec(num, div + 1, cnt + 2)
    : prime1Rec(num, div + 1, cnt);
};

const prime2Rec = (num, d = 2) => {
  if (num < 2) return false;
  if (num % d === 0) return false;
  if (d * d > num) return true;
  return prime2Rec(num, d === 2 ? 3 : d + 2);
};

// Greatest Common Factor AND the Least Common Multiple
const GCF1 = (num1, num2) => {
  let maxi = 0;
  for (let i = 1; i * i <= num1; ++i) {
    if (num1 % ((num1 / i) | 0) === 0 && num2 % ((num1 / i) | 0) === 0) {
      if (maxi < i) maxi = (num1 / i) | 0;
    }
  }

  return maxi;
};

const GCF2 = (num1, num2) => {
  while (num2 !== 0) {
    const rest = num1 % num2;
    num1 = num2;
    num2 = rest;
  }
  return num1;
};

const GCFRec = (num1, num2) => {
  if (num2 === 0) return num1;
  return GCFRec(num2, num1 % num2);
};

// Diverse Propreties
// With how many 0 it ends the number 1000! (for example)
const final0 = (num) => {
  let div2 = 0,
    div5 = 0;
  for (let i = 1; i <= num; ++i) {
    let aux = i;
    while (aux % 2 === 0) div2++, (aux /= 2);
    while (aux % 5 === 0) div5++, (aux /= 5);
  }

  return Math.min(div2, div5);
};

// Legendre Theorem (example for 1000!)
// 1000 / 5 + 1000 / 25 + 1000 / 125 + 1000 / 625 = 200 + 40 + 8 + 9 = 249 zeros at the end
const legendre = (num) => {
  let div5 = 5,
    zeros = 0;
  // i know already div5 will be smaller than div2!!
  while (div5 <= num) {
    zeros += Math.floor(num / div5);
    div5 *= 5;
  }

  return zeros;
};

console.log(legendre(1000));
