let loopyLighthouse = function (range, multiples, words) {

  for (let num = range[0]; num <= range[1]; num++) {
    if ((num % multiples[0] === 0) && (num % multiples[1] === 0)) {
      console.log("BattyBeacon");
    } else if (num % multiples[1] === 0) {
      console.log("Beacon");
    } else if (num % multiples[0] === 0) {
      console.log("Batty");
    } else {
      console.log(num);
    }
  }
  
}

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));