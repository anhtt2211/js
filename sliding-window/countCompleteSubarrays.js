/**
 * @param {number[]} nums
 * @return {number}
 */
// [medium][sliding-window] 2799. Count Complete Subarrays in an Array

var countCompleteSubarrays = function (nums) {
  let count = 0;

  const distinct = new Set(nums).size;

  for (let i = 0; i < nums.length; i++) {
    const subArr = [];
    for (let j = i; j < nums.length; j++) {
      subArr.push(nums[j]);
      const subDistint = new Set(subArr).size;

      if (distinct === subDistint) {
        count++;
      }
    }
  }

  return count;
};

console.log(countCompleteSubarrays((nums = [1, 3, 1, 2, 2])));
console.log(
  countCompleteSubarrays([
    903, 205, 205, 933, 933, 1671, 44, 903, 572, 1885, 273, 1452, 65, 506, 696,
    801, 456, 995, 1722, 1319, 933, 717, 1418, 196, 1437, 463, 1463, 903, 1284,
    1714, 368, 1629, 332, 1955, 514, 811, 944, 1486, 368, 63, 385, 1931, 568,
    572, 1601, 745, 836, 303, 374, 3, 1559, 3, 1882, 1418, 3, 442, 1448, 119,
    1760, 241, 125, 303, 1445, 393, 1740, 1505, 1418, 1357, 1931, 644, 119, 709,
    3, 903, 200, 374, 1760, 830, 1399, 1775, 694, 104, 1694, 1782, 763, 1567,
    903, 1727, 593, 696, 1122, 1344, 350, 402, 1740, 456, 359, 547, 524, 760,
    1476, 1890, 139, 1370, 957, 678, 1737, 1476, 391, 1752, 879, 1760, 987,
    1457, 734, 196, 557, 1557, 1213, 576, 164, 779, 115, 821, 1370, 645, 892,
    880, 170, 86, 514, 72, 894, 173, 1585, 682, 593, 205, 463, 44, 239, 547,
    943, 933, 680, 3, 694, 1329, 1428, 583, 3, 1260, 768, 1836, 3, 1176, 1358,
    1942, 203, 875, 599, 4, 87, 104, 37, 92, 585, 93, 1015, 1245, 536, 811, 467,
    72, 1008, 1677, 426, 1038, 1830, 1772, 622, 1904, 3, 1585, 1325, 1127, 1115,
    384, 105, 527, 1008, 1830, 790, 1613, 417, 547, 1907, 967, 1718, 1122, 568,
    1502, 1324, 1535, 695, 1765, 80, 1585, 1662, 1838, 456, 986, 172, 1831,
    1548, 1727, 968, 547, 1155, 431, 532, 1528, 374, 442, 1852, 1154, 1765,
    1340, 1008, 115, 526, 914, 1511, 968, 696, 1639, 1727, 1610, 669, 594, 757,
    1463, 979, 1926, 717, 219, 1354, 35, 799, 1057, 1122, 463, 1547, 668, 627,
    536, 563, 514, 384, 1385, 164, 514, 255, 1332, 865, 1524, 1805, 724, 1141,
    594, 560, 547, 968, 1474, 1105, 1639, 1736, 648, 1547, 1907, 1812, 601, 760,
    44, 582, 103, 979, 42, 234, 905, 173, 607, 164, 1426, 1830, 184, 968, 1730,
    1955, 1224, 1462, 621, 303, 1692, 870, 1514, 1590, 1050, 1872, 339, 1463,
    1512, 1029, 164, 1057, 441, 685, 269, 93, 1004, 1241, 593, 1032, 895, 86,
  ])
);
