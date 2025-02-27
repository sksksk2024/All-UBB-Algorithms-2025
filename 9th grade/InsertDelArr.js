const delElement1 = (arr, pos) => {
  for (let i = 0; i < arr.length; ++i) {
    if (i === pos - 1) {
      for (let j = i; j < arr.length; ++j) arr[j] = arr[j + 1];
      arr.length--;
    }
  }
  return nums;
};

const delElement2 = (arr, pos) => {
  const part1 = arr.slice(0, pos - 1);
  const part2 = arr.slice(pos);
  arr = part1 + ',' + part2;
  return arr;
};

const delElement3 = (arr, pos) => arr.filter((_, idx) => idx !== pos - 1);

const delElement4 = (arr, pos) => {
  arr.splice(pos - 1, 1);
  return arr;
};

const delOddElements = (arr) => arr.filter((num) => !(num % 2));

const insertElement = (arr, pos, val) => {
  for (let i = 0; i < arr.length; ++i)
    if (pos - 1 === arr.length) {
      arr.push(val);
      break;
    } else if (i === pos - 1) {
      for (let j = arr.length; j > pos - 1; --j) arr[j] = arr[j - 1];
      arr[i] = val;
    }
  return arr;
};

const doubleOddElements1 = (arr) => {
  const result = [];
  arr.forEach((num) => {
    result.push(num);
    if (num % 2 === 0) {
      result.push(num);
    }
  });
  return result.join('');
};

const doubleOddElements2 = (arr) =>
  arr.flatMap((num) => (num % 2 === 0 ? [num, num] : num));

const nums = [2, 3, 1, 5, 4];
console.log(doubleOddElements2(nums).join(''));
