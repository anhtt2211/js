/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
// [medium][binary-search] 1482. Minimum Number of Days to Make m Bouquets

var minDays = function (bloomDay, m, k) {
  let left = 0;
  let right = Math.max(...bloomDay);
  let ans = -1;

  const caclcBouquests = (dayAt) => {
    let nBouquests = 0;
    let nAdjFlowers = 0;

    for (const day of bloomDay) {
      if (dayAt >= day) {
        nAdjFlowers++;
      } else {
        nBouquests += Math.floor(nAdjFlowers / k);
        nAdjFlowers = 0;
      }
    }

    nBouquests += Math.floor(nAdjFlowers / k);

    return nBouquests;
  };

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const nBouquests = caclcBouquests(mid);
    if (nBouquests >= m) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans;
};

const bloomDay = [1, 10, 3, 10, 2],
  m = 3,
  k = 1;
const output = minDays(bloomDay, m, k);
console.log("🚀 ~ output:", output);
