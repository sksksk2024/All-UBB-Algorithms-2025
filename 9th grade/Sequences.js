// Determine the max sequence of even numbers
const sequence1 = (nums) => {
  let maxi = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] % 2 === 0) {
      let j = i;
      for (; j < nums.length; ++j) {
        if (nums[j] % 2 !== 0) break;
      }
      if (maxi < j - i + 1) maxi = j - i + 1;
    }
  }
  return maxi;
};

const sequence2 = (nums) => {
  let lmax, l;
  lmax = l = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] % 2 === 0) l++;
    else l = 0;
    lmax = Math.max(lmax, l);
  }
  return lmax;
};

// start to bottom: s[i] = s[i - 1] + a[i];
// interval of 2 values: sumSeq = sp[dr] - sp[st - 1]
const sequence3 = (nums) => {
  let sp = [];
  sp[0] = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    sp[i] = sp[i - 1] + nums[i];
  }
  let maxi = sp[0];
  for (let st = 0; st < nums.length; ++st) {
    for (let dr = st; dr < nums.length; ++dr) {
      let sum = st === 0 ? sp[dr] : sp[dr] - sp[st - 1];
      maxi = Math.max(maxi, sum);
    }
  }
  return maxi;
};

const sequence4 = (nums) => {
  let sum = 0,
    maxi = nums[0];
  for (const num of nums) {
    sum = Math.max(num, sum + num);
    maxi = Math.max(maxi, sum);
  }
  return maxi;
};

// max sequence of ordonated elements
const sequence5 = (nums) => {
  let l, lmax;
  l = lmax = 0;
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] > nums[i - 1]) l++;
    else l = 1;
    lmax = Math.max(lmax, l);
  }
  return lmax;
};

const arr = [2, -3, 77, 5, -6, 3, 2, -4, 7, -12];
console.log(sequence5(arr));
