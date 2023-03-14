const plusOne = (digits) => {
  let strNumber = "";
  digits.forEach((num) => {
    strNumber = strNumber + num;
  });

  let number = parseInt(strNumber) + 1;
  const result = [];
  number
    .toString()
    .split("")
    .forEach((num) => {
      result.push(parseInt(num));
    });

  return result;
};

const digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];

const res = plusOne(digits);

console.log({ res });
