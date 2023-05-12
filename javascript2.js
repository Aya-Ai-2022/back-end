let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

console.log(newYearsResolutions);

const hobbies =['Gaming','Sport','Reading'];

console.log(hobbies);

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];


let listItem= famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);

let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1]= 'avocados';

let condiments = ["Ketchup", "Mustard", "Soy Sauce", "Sriracha"];

const utensils = ["Fork", "Knife", "Chopsticks", "Spork"];

condiments[0] = "Mayo";
console.log(condiments);

condiments = ["Mayo"];
console.log(condiments);
utensils[3] = "Spoon";
console.log(utensils);

const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);

const chores = ['wash dishes', 'do laundry', 'take out trash'];


chores.push('item 3', 'item 4');
 
console.log(chores);

const chores = [
  "wash dishes",
  "do laundry",
  "take out trash",
  "cook dinner",
  "mop floor",
];
chores.pop();
console.log(chores);

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

console.log(groceryList);

groceryList.unshift('popcorn');

console.log(groceryList);

console.log(groceryList.slice(1, 4));

console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);

const concept = ["arrays", "can", "be", "mutated"];

function changeArr(arr) {
  arr[3] = "MUTATED";
}

changeArr(concept);
console.log(concept);
function removeElement(newArr) {
  newArr.pop();
}
removeElement(concept);
console.log(concept);


numberClusters = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const target = numberClusters[2][1];





////////////////////////////////////////loops/////////////////////////////////////////////////////////////////////////


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


const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
  if (rapperArray[i] === "Notorious B.I.G.") {
    console.log(rapperArray[i]);
    break;
  }
}

console.log("And if you don't know, now you know.");




//////////////////////////////////////////////////////////////////////////////////////

const strangeBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Cow', 'Terrorbird', 'Parotia', 'Kakapo'];
 
for (const bird of strangeBirds) {
  if  (bird === 'Cow'){
    continue;
  }
  console.log(bird);
}

//////////////////////////////////////////////////////////////////////////////////

const nums = [1, 2, 3];
 
for (let i = nums.length - 1; i >= 0; i--) {
  console.log(nums[i]);
}
 
console.log('Time is up!');

const spellingWord = 'hippopotamus';
for (let i = 0; i < spellingWord.length; i++) {
  
    console.log(spellingWord[i]);

}
//////////////////////////////////////////////////////

const spellingWord = 'hippopotamus';

// Write your code below
for (const letter of spellingWord) {
  console.log(letter);
}

/////////////////////////////////////////////////////////////////

const pokemonList = ['Pikachu', 'Charizard', 'Squirtle', 'Yoshi', 'Snorlax'];

for (const letter of pokemonList) {
  if(letter=== 'Yoshi'){
    continue;
    
}
console.log(`You caught a ${letter}!`);
}

/////////////objects///////////////////////////////////////////////////////////////


let fasterShip = {
  "Fuel Type": "Turbo Fuel",
  color: "silver",
};

let spaceship = {
  homePlanet: "Earth",
  color: "silver",
  "Fuel Type": "Turbo Fuel",
  numCrew: 5,
  flightPath: ["Venus", "Mars", "Saturn"],
};

let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;


let spaceship = {
  "Fuel Type": "Turbo Fuel",
  "Active Mission": true,
  homePlanet: "Earth",
  numCrew: 5,
};

let propName = "Active Mission";

let isActive = spaceship[propName];
console.log(isActive);

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};



spaceship.color = 'glorious gold';

spaceship.numEngines = 9;

delete spaceship['Secret Mission'];

let retreatMessage =
  "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";
const alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log("Spim... Borp... Glix... Blastoff!");
  },
};
alienShip.retreat();
alienShip.takeOff();

let spaceship = {
  passengers: [{name: 'Space Dog'}], 
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

let capFave = spaceship.crew.captain['favorite foods'][0];

let firstPassenger = spaceship.passengers[0];
