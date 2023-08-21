/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
// [easy][array] 2418. Sort the People

var sortPeople = function (names, heights) {
  const peoples = [];

  for (let i = 0; i < names.length; i++) {
    peoples.push({ name: names[i], height: heights[i] });
  }

  peoples.sort((a, b) => b.height - a.height);

  const sortedNames = peoples.map((person) => person.name);

  return sortedNames;
};

console.log(
  sortPeople((names = ["Mary", "John", "Emma"]), (heights = [180, 165, 170]))
);
console.log(
  sortPeople((names = ["Alice", "Bob", "Bob"]), (heights = [155, 185, 150]))
);
