/* first exercise:
function findAverage(x, y) {
  var answer = (x + y) / 2;
  return answer;
}
var avg = findAverage(5, 9);
console.log(avg);
*/

/* quiz #1:
function laugh() {
  return "hahahahahahahahahaha!"
}
console.log(laugh());
*/

// quiz #2:

var sound = "";
function laugh(num) {
  for (var x = 0; x < num; x++) {
    sound = sound + "ha";
  }
  sound = sound +"!";
  return sound;
}
console.log(laugh(5));