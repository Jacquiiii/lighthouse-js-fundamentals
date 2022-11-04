let num = ""

function howManyHundreds(num) {
  if (num >= 100) {
    return Math.floor(num / 100);
  } else {
    return 0;
  }
};

console.log(howManyHundreds(1000));