// Classic Merge
const merge1 = (nums1, nums2) => {
  let i = 0,
    j = 0;
  const nums3 = []; // declared inside the function(not like in C++ language)

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) nums3.push(nums1[i++]);
    else nums3.push(nums2[j++]);
  }

  while (i < nums1.length) nums3.push(nums1[i++]);
  while (j < nums2.length) nums3.push(nums2[j++]);

  return nums3;
};

// Unity
const merge2 = (nums1, nums2) => {
  let i, j;
  i = j = 0;
  const nums3 = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) nums3.push(nums1[i++]);
    else if (nums1[i] > nums2[j]) nums3.push(nums2[j++]);
    else {
      //     nums3.push(nums1[i++]), j++;
      //   while (nums1[i + 1] === nums2[j]) i++;
      //   while (nums2[j] === nums2[j + 1]) j++;
      nums3.push(nums1[i++]), j++; // Add the common element once
      while (i < nums1.length && nums1[i] === nums3[nums3.length - 1]) i++;
      while (j < nums2.length && nums2[j] === nums3[nums3.length - 1]) j++;
    }
  }
  while (i < nums1.length) {
    if (nums3[nums3.length - 1] !== nums1[i]) {
      nums3.push(nums1[i]);
    }
    i++;
  }
  while (j < nums2.length) {
    if (nums3[nums3.length - 1] !== nums2[j]) nums3.push(nums2[j]);
    j++;
  }
  return nums3;
};

// Intersaction
const merge3 = (nums1, nums2) => {
  let i, j;
  i = j = 0;
  const nums3 = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) i++;
    else if (nums1[i] > nums2[j]) j++;
    else {
      nums3.push(nums1[i]);
      while (i < nums1.length && nums1[i] === nums3[nums3.length - 1]) i++;
      while (j < nums2.length && nums2[j] === nums3[nums3.length - 1]) j++;
    }
  }

  return nums3;
};

// Difference A / B
const merge4 = (nums1, nums2) => {
  let i, j;
  i = j = 0;
  const nums3 = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      nums3.push(nums1[i]);
      while (i < nums1.length && nums1[i] === nums3[nums3.length - 1]) i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      while (i < nums1.length && nums1[i] === nums2[j]) i++;
      while (j < nums2.length && nums2[j] === nums1[i - 1]) j++;
    }
  }
  while (i < nums1.length) {
    if (nums3[nums3.length - 1] !== nums1[i]) nums3.push(nums1[i]);
    i++;
  }

  return nums3;
};

// Simetric Difference
const merge5 = (nums1, nums2) => {
  let i, j;
  i = j = 0;
  const nums3 = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      nums3.push(nums1[i]);
      while (i < nums1.length && nums1[i] === nums3[nums3.length - 1]) i++;
    } else if (nums1[i] > nums2[j]) {
      nums3.push(nums2[j]);
      while (j < nums2.length && nums2[j] === nums3[nums3.length - 1]) j++;
    } else {
      while (i < nums1.length && nums1[i] === nums2[j]) i++;
      while (j < nums2.length && nums2[j] === nums1[i - 1]) j++;
    }
  }
  while (i < nums1.length) {
    if (nums3[nums3.length - 1] !== nums1[i]) nums3.push(nums1[i]);
    i++;
  }
  while (j < nums2.length) {
    if (nums3[nums3.length - 1] !== nums2[j]) nums3.push(nums2[j]);
    j++;
  }

  return nums3;
};

console.log(
  merge5([2, 2, 3, 5, 5, 7, 8, 9, 11, 20], [1, 2, 3, 3, 6, 9, 9, 9, 12, 13])
);
