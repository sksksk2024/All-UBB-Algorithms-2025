const base2 = (num) => {
  const arr = [];
  while (num) {
    arr.push(num % 2);
    num = Math.floor(num / 2);
  }

  return arr.reverse();
};

const base2Map = (num) => {
  const arr = new Map();
  let i = 0;
  while (num) {
    arr.set(i++, num % 2);
    num = Math.floor(num / 2);
  }

  return Array.from(arr.values()).reverse().join('');
};

const base2Rec = (num, arr) => {
  if (num === 0) return arr.join('');
  arr.unshift(num % 2);
  return base2Rec(Math.floor(num / 2), arr);
};

const base16 = (num, arr) => {
  let result = [];

  if (num === 0) return 0;

  while (num !== 0) {
    result.push(arr[num % 16]);
    num = Math.floor(num / 16);
  }
  return result.reverse().join('');
};
// const hexDigits = '0123456789ABCDEF'.split('');

const hexDigits = '0123456789ABCDEF'.split('');
const base16Rec = (num, result) => {
  if (num === 0) return result.length > 0 ? result.join('') : 0;

  result.unshift(hexDigits[num % 16]);
  return base16Rec((num / 16) | 0, result);
};
// console.log(base16Rec(10, []));
// console.log(base16(16, ['0', '1', '2', '3', '4', '5', '6','7','8','9','A','B','C', 'D', 'E','F',]));

// sum of distinct powers (in a respective base, it must be composed just with 0 and 1)
const sumDistinctPowers = (num, base) => {
  while (num) {
    if (num % base > 1) return false;
    num = Math.floor(num / base);
  }
  return true;
};

const arr2 = Array.from('10010111011101001100100001').join('');

const base2ToBase10 = (nums) => {
  let p = 1,
    result = 0;
  for (let i = nums.length - 1; i >= 0; --i) {
    result = result + p * nums[i];
    p *= 2;
  }
  return result;
};

const arr16 = Array.from('F');
const base16ToBase10 = (nums) => {
  let p = 1,
    convert = 'ABCDEF',
    result = 0;
  for (let i = nums.length - 1; i >= 0; --i) {
    let digit = nums[i];
    if (digit >= '0' && digit <= '9') {
      digit = parseInt(digit);
    } else {
      digit = 10 + convert.indexOf(digit);
    }

    result += p * digit;
    p *= 16;
  }
  return result;
};
console.log(base16ToBase10(arr16));
