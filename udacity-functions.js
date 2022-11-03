/* 
function findAverage(x, y) {
  var answer = (x + y) / 2;
  return answer;
}
var avg = findAverage(5, 9);
console.log(avg);
*/

/* 
quiz #1:
function laugh() {
  return "hahahahahahahahahaha!"
}
console.log(laugh());
*/

/* 
quiz #2:
var sound = "";
function laugh(num) {
  for (var x = 0; x < num; x++) {
    sound = sound + "ha";
  }
  sound = sound +"!";
  return sound;
}
console.log(laugh(5));
*/

/*
function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return "Returning: I am returning this string!";
}
console.log(isThisWorking(3));
*/

/*
function sleep() {
  console.log("I'm sleepy!");
  return "zzz";
  return "snore";
}
sleep();
*/

/*
function square(x) {
  return x * x;
}
function subtractFour(x) {
  return square(x) - 4;
}
console.log(subtractFour(5));
*/

/*
function test() {
  return 1;
  return 2;
}
test();
*/

/* quiz #3 make a triangle
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}
function buildTriangle(length) {
  var triangle = "";
  var lineNumber = 1
  for (lineNumber = 1; lineNumber <= length; lineNumber++) {
    triangle = triangle + makeLine(lineNumber);
  }
  return triangle;
}
console.log(buildTriangle(10));
*/

/* 
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}
helloCat(catSays);
*/

/* 
quiz #4:
var laugh = function (num) {
  var sound = ""
  for (var x = 0; x < num; x++) {
    sound = sound + "ha";
  }
  sound = sound +"!";
  return sound;
}
console.log(laugh(10));
*/

/* 
quiz #5:
var cry = function booHoo() {
  return "boohoo!";
}
console.log(cry());
*/

/* quiz #6: 
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}
emotions ("happy", function(num) {
  var sound = ""; 
    for (var i = 0 ; i < num ; i++) {
        sound = sound + "ha" ;  
    }
    sound = sound +"!"; 
    return sound; 
});
*/

