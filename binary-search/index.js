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

const input = [1, 2, 3, 4, 5];
const target = 3;

console.log(binarySearch(input, target));

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
    if (array[mid] > target) {
      ans = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return ans;
};
