// Verify if an element appears in a sorted array
const binarySearch1 = (nums, val) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === val) return true;
    else if (nums[mid] < val) left = mid + 1;
    else right = mid - 1;
  }
  return false;
};

const binarySearch1Rec = (nums, val, left, right) => {
  if (left > right) return false;
  let mid = Math.floor((left + right) / 2);
  if (nums[mid] === val) return true;
  else if (nums[mid] < val) return binarySearch1Rec(nums, val, mid + 1, right);
  return binarySearch1Rec(nums, val, left, mid - 1);
};

// identify the position where the element appears in the sorted array(from 1 to the length of the array)
const binarySearch2 = (nums, val) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === val) return mid + 1;
    else if (nums[mid] < val) left = mid + 1;
    else right = mid - 1;
  }
  return "Doesn't Exist!";
};

const binarySearch2Rec = (nums, val, left, right) => {
  if (left > right) return "Doesn't Exist!";
  const mid = Math.floor((left + right) / 2);
  if (nums[mid] === val) return mid + 1;
  else if (nums[mid] < val) return binarySearch2Rec(nums, val, mid + 1, right);
  return binarySearch2Rec(nums, val, left, mid - 1);
};

// position of the smallest element bigger or equal with a value (0 to length - 1)
const binarySearch3 = (nums, val) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === val) return mid;
    else if (nums[mid] > val) right = mid - 1;
    else left = mid + 1;
  }
  return left;
};

// position of the biggest element smaller or equal with a value (0 to length - 1)
const binarySearch4 = (nums, val) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === val) return mid;
    else if (nums[mid] < val) left = mid + 1;
    else right = mid - 1;
  }
  return right;
};

// determine the position of the first apparition of an element in the array
const binarySearch5 = (nums, val) => {
  let left = 0,
    idx = -1;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === val) {
      idx = mid;
      right = mid - 1;
    } else if (nums[mid] > val) right = mid - 1;
    else left = mid + 1;
  }
  return idx === -1 ? -1 : idx + 1;
};

// determine the position of the last apparition of an element in the array
const binarySearch6 = (nums, val) => {
  let left = 0,
    idx = -1;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === val) {
      idx = mid;
      left = mid + 1;
    } else if (nums[mid] < val) left = mid + 1;
    else right = mid - 1;
  }
  return idx === -1 ? -1 : idx + 1;
};

// with the help of the precedent 2 algorithms, determine the number of apparitions of a value
const binarySearch7 = (nums, val) => {
  const firstAp = binarySearch5(nums, val);
  const lastAp = binarySearch6(nums, val);
  return firstAp === -1 || lastAp === -1
    ? "It's not there"
    : `${lastAp - firstAp + 1} number of apparitions`;
};

// check if a numbers is squared or cubed
const isSquared = (num) => {
  let left = 0;
  let right = num;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (mid * mid === num) return `${mid} * ${mid} = ${num}`;
    else if (mid * mid > num) right = mid - 1;
    else left = mid + 1;
  }
  return 'Is not a squared number';
};

const isCubed = (num, left, right) => {
  if (left > right) return 'Nope';
  const mid = Math.floor((left + right) / 2);
  if (Math.pow(mid, 3) === num) return `${mid}^3 = ${num}`;
  else if (Math.pow(mid, 3) > num) return isCubed(num, left, mid - 1);
  return isCubed(num, mid + 1, right);
};

const number = 1000;
arr = [1, 3, 3, 3, 4, 5, 7, 7, 7];
console.log(isCubed(number, 0, number)); /// doesnt work for 7 fsr
