/**
 * @param {string} str
 * @return {number}
 */
// [easy][string] 434. Number of Segments in a String

var countSegments = function (str) {
  if (!str) return 0;
  const trimmedString = str.trim();

  if (trimmedString === "") return 0;

  str = str.trim();
  while (str.includes("  ")) {
    str = str.replace("  ", " ");
  }

  return str.split(" ").length;
};

console.log(
  countSegments(
    (s = "Of all the gin joints in all the towns in all the world,   ")
  )
);
console.log(countSegments((s = "Hello,  my name is John")));
console.log(countSegments((s = "Hello")));
console.log(countSegments((s = "Hello  world")));
