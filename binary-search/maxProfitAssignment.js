/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
// [medium][binary-search] 826. Most Profit Assigning Work
const upperBound = (array, target) => {
  let left = 0,
    right = array.length - 1,
    ans = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid].difficulty > target) {
      right = mid - 1;
    } else {
      ans = mid;
      left = mid + 1;
    }
  }

  return ans;
};

var maxProfitAssignment = function (difficulty, profit, worker) {
  const jobs = [];
  for (let i = 0; i < difficulty.length; i++) {
    jobs.push({
      difficulty: difficulty[i],
      profit: profit[i],
    });
  }
  jobs.sort((a, b) => a.difficulty - b.difficulty);

  let maxProfit = 0;
  for (let i = 0; i < jobs.length; i++) {
    jobs[i].profit = maxProfit = Math.max(maxProfit, jobs[i].profit);
  }

  let ans = 0;
  for (const skill of worker) {
    const maxProfitIndex = upperBound(jobs, skill);
    if (maxProfitIndex !== -1) {
      ans += jobs[maxProfitIndex].profit;
    }
  }

  return ans;
};

console.log(
  maxProfitAssignment(
    [68, 35, 52, 47, 86],
    [67, 17, 1, 81, 3],
    [92, 10, 85, 84, 82]
  )
);

console.log(
  maxProfitAssignment(
    (difficulty = [2, 4, 6, 8, 10]),
    (profit = [10, 20, 30, 40, 50]),
    (worker = [4, 5, 6, 7])
  )
);
console.log(
  maxProfitAssignment(
    (difficulty = [85, 47, 57]),
    (profit = [24, 66, 99]),
    (worker = [40, 25, 25])
  )
);
