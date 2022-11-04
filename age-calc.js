let name = "";
let yearOfBirth = "";
let currentYear = "";

function ageCalculator(name, yearOfBirth, currentYear) {
  return name + " is " + (currentYear - yearOfBirth) + " years old.";
}

console.log(ageCalculator("Jacqui", 1990, 2022));