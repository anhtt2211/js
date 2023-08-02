const plusOne = (digits) => {
  let temp = 0;
  let result = [];

  for (let index = digits.length - 1; index >= 0; index--) {
    const element = digits[index];
    let number = element;
    if (index === digits.length - 1) {
      number = element + 1 + temp;
    } else {
      number += temp;
    }

    result.push(number % 10);
    temp = Math.floor(number / 10);

    if (index === 0 && temp !== 0) {
      result.push(temp);
    }
  }

  return result.reverse();
};

// const digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 9];
const digits = [9, 9];

const res = plusOne(digits);

console.log({ res });
