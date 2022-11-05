/*

function findAverage(x, y) {
  var answer = (x + y) / 2;
  return answer;
}
var avg = findAverage(5, 9);
console.log(avg);



function laugh() {
  return "hahahahahahahahahaha!"
}
console.log(laugh());



var sound = "";
function laugh(num) {
  for (var x = 0; x < num; x++) {
    sound = sound + "ha";
  }
  sound = sound +"!";
  return sound;
}
console.log(laugh(5));



function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return "Returning: I am returning this string!";
}
console.log(isThisWorking(3));



function sleep() {
  console.log("I'm sleepy!");
  return "zzz";
  return "snore";
}
sleep();



function square(x) {
  return x * x;
}
function subtractFour(x) {
  return square(x) - 4;
}
console.log(subtractFour(5));



function test() {
  return 1;
  return 2;
}
test();



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



var laugh = function (num) {
  var sound = ""
  for (var x = 0; x < num; x++) {
    sound = sound + "ha";
  }
  sound = sound +"!";
  return sound;
}
console.log(laugh(10));

 

var cry = function booHoo() {
  return "boohoo!";
}
console.log(cry());


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

var inventory = [
  ["gold pieces", 25],
  ["belt", 4],
  ["ring", 1],
  ["shoes", 2]
];
console.log(inventory.length);
 


var donuts = ["cookies", "cinnamon sugar", "creme de leche"];
donuts.splice(-2, 0, "chocolate frosted", "glazed");
console.log(donuts);



var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];
rainbow.splice(2, 1, 'Yellow', 'Green');
rainbow.splice(5, 0, 'Purple');
console.log(rainbow);



var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
function hasEnoughPlayers(arrayInstance) {
    if (arrayInstance.length >= 7) {
        return true;
    } else {
        return false;
    }
}
console.log(hasEnoughPlayers(team));



var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";
var crew = [captain, second, pilot, companion, mercenary, mechanic];
var doctor = "Simon";
var sister = "River";
var shepherd = "Book";
crew.push(doctor, sister, shepherd);
console.log(crew);



var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];
console.log(test.forEach(function(item, index) {
if (item % 3 === 0) {
  test[index] += 100;
}
}));



var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
var totals = bills.map(function(bill) {
  bill = bill * 0.15 + bill;
  bill = bill.toFixed(2);
  return Number(bill);
})
console.log(totals);



var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];
for (var r = 0; r < numbers.length; r++) {
  for (var c = 0; c < numbers[r].length; c++) {
    if (numbers [r] [c] % 2 === 0) {
      numbers [r] [c] = "even";
    } else {
      numbers [r] [c] = "odd";
    }
  }
}
console.log(numbers);

*/



var umbrella = {
  color: "pink",
  isOpen: true,
  open: function() {
      if (umbrella.isOpen === true) {
          return "The umbrella is already opened!";
      } else {
          umbrella.isOpen = true;
          return "Julia opens the umbrella!";
      }
  },
  close: function() {
      if (umbrella.isOpen === false) {
          return "The umbrella is already closed!";
      } else {
          umbrella.isOpen = false;
          return "Julie closes the umbrella";
      }
  }
};



var breakfast = {
  name: "The Lumberjack",
  price: "$9.95",
  ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
};



var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  },
  printAccountSummary: function printAccountSummary() {
    return "Welcome! \nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%.";
  }
};
console.log(savingsAccount.printAccountSummary());



var facebookProfile = {
  name: "Jacqui",
  friends: 150,
  messages: ["Watering my plants", "Feeling happy", "Watching HP"],
  postMessage: function(message) {
    facebookProfile.messages.push(message);
  },
  deleteMessage: function(index) {
    facebookProfile.messages.splice(index, 1);
  },
  addFriend: function() {
    facebookProfile.friends += 1;
  },
  removeFriend: function() {
    if(facebookProfile.friends>0) {
      facebookProfile.friends - 1;}
  }
};


var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];


donuts.forEach(function(donut) {
  console.log(donut.type + " donuts cost $" + donut.cost + " each");
}
);


