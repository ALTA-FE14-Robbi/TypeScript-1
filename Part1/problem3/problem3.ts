export const isArmstrongNumber = (num: number) => {
  const digits = num.toString().split('');
  const numDigits = digits.length;
  const sum = digits.reduce((acc, digit) => {
    return acc + Math.pow(parseInt(digit), numDigits);
  }, 0);
  return sum === num;
}


// console.log(isArmstrongNumber(153)); // true