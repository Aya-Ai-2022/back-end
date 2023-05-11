let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

secretMessage.pop();

console.log(secretMessage.length);

secretMessage.push("to", "Program");

secretMessage[secretMessage.indexOf("easily")] = "right";
//console.log(secretMessage);

secretMessage.shift();
secretMessage.unshift("Programming");
//console.log(secretMessage);
secretMessage.splice(6, 5, "know,");

console.log(secretMessage.join(" "));



//////loops///////////





const vacationSpots = ['Alex', 'Aswan', 'Minia'];

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);



for (let counter = 5; counter <=10; counter++) {
  console.log(counter);
}


// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >=0; counter--){
  console.log(counter);
}


const vacationSpots = ["Bali", "Paris", "Tulum"];
for (let i = 0; i < vacationSpots.length; i++){
  console.log('I would love to visit '+vacationSpots[i]);
}

let bobsFollowers = ["Ali", "Ahmed", "Ramy", "Mohamed"];

let tinasFollowers = ["Ahmed", "Ramy", "Laila"];
let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
console.log("You have the friends: " + mutualFollowers);

const cards = ["diamond", "spade", "heart", "club"];

let currentCard;

while (currentCard !== "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}
let cupsOfSugarNeeded = 5;
let cupsAdded = 0;

do {
  cupsAdded = cupsAdded + 1;

  console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded);

