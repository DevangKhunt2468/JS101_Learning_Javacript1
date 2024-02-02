const num1 = 10;
const num2 = 25;
const num3 = 15;

const greatest = (num1 > num2 && num1 > num3)
  ? num1
  : (num2 > num1 && num2 > num3)
  ? num2
  : num3;

console.log(`The greatest number is: ${greatest}`);