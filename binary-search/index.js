const binarySearch = (array, target) => {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

const lowerBound = (array, target) => {
  let start = 0;
  let end = array.length - 1;
  let ans = array.length;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] >= target) {
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return ans;
};

const upperBound = (array, target) => {
  let start = 0;
  let end = array.length - 1;
  let ans = array.length;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] <= target) {
      ans = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return ans;
};

// input: n
// output: find the nearest integer x such that x^3 less than or equal n
// constraints: 0 <= n <= 2^32 - 1

const sol = (n) => {
  let left = 0,
    right = n - 1,
    ans = 0;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (mid * mid * mid >= n) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans;
};

console.log("output >>", sol(10));

// ans = 4, right = 3
// => mid = 1 => left = 2
// mid = 2 + 1 = 3 => ans = 3, right = 2
// mid = 2 => left = 3
