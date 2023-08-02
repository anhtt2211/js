/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
// 599. Minimum Index Sum of Two Lists
var findRestaurant = function (list1, list2) {
  if (list1.length < list2.length) {
    [list1, list2] = [list2, list1];
  }

  const hasmap1 = new Map(),
    hasmap2 = new Map();
  let minSum = list1.length + list2.length - 2;
  const result = [];

  list1.forEach((ele, index) => {
    hasmap1.set(ele, index);
  });
  list2.forEach((ele, index) => {
    hasmap2.set(ele, index);
  });

  for (const [key_1, value_1] of hasmap1) {
    if (hasmap2.has(key_1)) {
      const value2 = hasmap2.get(key_1);
      const sum = value_1 + value2;

      if (sum < minSum) {
        minSum = sum;
      }
    }
  }

  for (const [key_1, value_1] of hasmap1) {
    if (hasmap2.has(key_1)) {
      const value2 = hasmap2.get(key_1);
      const sum = value_1 + value2;

      if (sum === minSum) {
        result.push(key_1);
      }
    }
  }

  return result;
};

console.log(
  findRestaurant(
    (list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]),
    (list2 = [
      "Piatti",
      "The Grill at Torrey Pines",
      "Hungry Hunter Steakhouse",
      "Shogun",
    ])
  )
);
console.log(
  findRestaurant(
    (list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]),
    (list2 = ["KFC", "Shogun", "Burger King"])
  )
);
console.log(
  findRestaurant(
    (list1 = ["happy", "sad", "good"]),
    (list2 = ["sad", "happy", "good"])
  )
);
