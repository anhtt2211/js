/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
// [easy][string] 748. Shortest Completing Word

const isValidWord = (word, hasmap) => {
  const wordMap = {};
  for (const letter of word) {
    wordMap[letter] = (wordMap[letter] || 0) + 1;
  }

  for (const [key, value] of Object.entries(hasmap)) {
    if (!wordMap[key] || wordMap[key] < value) {
      return false;
    }
  }
  return true;
};

/** Solution 1 */
var shortestCompletingWord1 = function (licensePlate, words) {
  const liscenMap = {};
  licensePlate = licensePlate.toLowerCase();

  for (let ele of licensePlate) {
    if (/^[a-z]$/.test(ele)) {
      liscenMap[ele] = (liscenMap[ele] || 0) + 1;
    }
  }

  const words_valid = [];
  for (let ele of words) {
    const hasMap = {};
    const liscenMap_ele = { ...liscenMap };

    for (const letter of ele) {
      hasMap[letter] = (hasMap[letter] || 0) + 1;
    }

    for (const [key, value] of Object.entries(hasMap)) {
      const liscen_value = liscenMap_ele[key];

      if (liscen_value) {
        if (liscen_value > value) {
          break;
        } else {
          liscenMap_ele[key] = liscen_value - value;
        }
      }

      let _flag = true;
      for (const [_key, _value] of Object.entries(liscenMap_ele)) {
        if (_value > 0) {
          _flag = false;
        }
      }

      if (_flag) break;
    }

    let flag = true;
    for (const [_key, value] of Object.entries(liscenMap_ele)) {
      if (value > 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      words_valid.push(ele);
    }
  }

  let shortest_word = words_valid[0];
  for (let i = 1; i < words_valid.length; i++) {
    const element = words_valid[i];
    if (shortest_word.length > element.length) {
      shortest_word = element;
    }
  }

  return shortest_word;
};

/** Solution 2 */
var shortestCompletingWord2 = function (licensePlate, words) {
  const liscenMap = {};
  licensePlate = licensePlate.toLowerCase();

  for (let ele of licensePlate) {
    if (/^[a-z]$/.test(ele)) {
      liscenMap[ele] = (liscenMap[ele] || 0) + 1;
    }
  }

  const validWords = words.filter((word) =>
    isValidWord(word, { ...liscenMap })
  );

  let shortestWord = validWords[0];
  for (let i = 1; i < validWords.length; i++) {
    const word = validWords[i];
    if (shortestWord.length > word.length) {
      shortestWord = word;
    }
  }

  return shortestWord;
};

console.log(
  shortestCompletingWord2("GrC8950", [
    "measure",
    "other",
    "every",
    "base",
    "according",
    "level",
    "meeting",
    "none",
    "marriage",
    "rest",
  ])
);

console.log(
  shortestCompletingWord2(
    (licensePlate = "1s3 PSt"),
    (words = ["step", "steps", "stripe", "stepple"])
  )
);
console.log(
  shortestCompletingWord2(
    (licensePlate = "1s3 456"),
    (words = ["looks", "pest", "stew", "show"])
  )
);
