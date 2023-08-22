/**
 * @param {string[][]} paths
 * @return {string}
 */
// [easy][string] 1436. Destination City
var destCity = function (paths) {
  const destinationSet = new Set();

  for (const path of paths) {
    destinationSet.add(path[0]);
  }

  for (const path of paths) {
    if (!destinationSet.has(path[1])) {
      return path[1];
    }
  }

  return null;
};

console.log(
  destCity(
    (paths = [
      ["London", "New York"],
      ["New York", "Lima"],
      ["Lima", "Sao Paulo"],
    ])
  )
);

console.log(
  destCity(
    (paths = [
      ["B", "C"],
      ["D", "B"],
      ["C", "A"],
    ])
  )
);
