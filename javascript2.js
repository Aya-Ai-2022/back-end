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


let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below

let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil';
}

let remotelyDisable = obj => {
  obj.disabled = true;
}

greenEnergy(spaceship);

remotelyDisable(spaceship);

console.log(spaceship);


let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 



for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
};

for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
};

////////////////////////
const robot = {
  model: 'B-4MI',
  mobile: true,
  greeting() {
  	console.log(`I'm model ${this.model}, how may I be of service?`);
  }
}

const massProdRobot = (model, mobile) => {
  return {
    model,
    mobile,
    greeting() {
      console.log(`I'm model ${this.model}, how may I be of service?`);
    }
  }
}

const shinyNewRobot = massProdRobot('TrayHax', true)

const chargingStation = {
  _name: 'Electrons-R-Us',
  _robotCapacity: 120,
  _active: true,
  _chargingRooms: ['Low N Slow', 'Middle of the Road', 'In and Output'],

  set robotCapacity(newCapacity) {
    if (typeof newCapacity === 'number') {
      this._robotCapacity = newCapacity;
    } else {
      console.log(`Change ${newCapacity} to a number.`)
    }
  },
  get robotCapacity() {
    return this._robotCapacity;
  }
}
///////////////////

const robot = {
  model: "1E78V2",
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  },
};
console.log(robot.provideInfo());
///////////////////////
const robot = {
  energyLevel: 100,
  checkEnergy(){
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();


const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot._energyLevel = 'high';
robot.recharge();

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if(typeof this._energyLevel === 'number') {
      return 'My current energy level is ' + this._energyLevel
    } else {
      return "System malfunction: cannot retrieve energy level"
    }
  }
};

console.log(robot.energyLevel);

const robot = {
  _model: "1E78V2",
  _energyLevel: 100,
  _numOfSensors: 15,
  set numOfSensors(num) {
    if (typeof num === "number" && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log("Pass in a number that is greater than or equal to 0");
    }
  },
  get numOfSensors() {
    if (typeof this._numOfSensors === "number") {
      return this._numOfSensors;
    } else {
      return "Sensors are currently down.";
    }
  },
};
robot.numOfSensors = 100;
console.log(robot.numOfSensors);
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
};

const tinCan = robotFactory("P-500", true);
tinCan.beep();

const robotFactory = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}


const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile);


const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};
 const {functionality}= robot;
 functionality.beep();

const robot = {
  model: "SAL-1000",
  mobile: true,
  sentient: false,
  armor: "Steel-plated",
  energyLevel: 75,
};


const robotKeys = Object.keys(robot);

console.log(robotKeys);


const robotEntries = Object.entries(robot);
console.log(robotEntries);


const newRobot = Object.assign(
  { laserBlaster: true, voiceRecognition: true },
  robot
);

console.log(newRobot);
/////////////////////////////////////Itrators//////////////////////////


const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`));


const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];


const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];


const smallNumbers = bigNumbers.map(num => num/100);

console.log(smallNumbers);

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter((num) => {
  return num < 250;
});

const favoriteWords = [
  "nostalgia",
  "hyperbole",
  "fervent",
  "esoteric",
  "serene",
];

const longFavoriteWords = favoriteWords.filter((word) => {
  return word.length > 7;
});


const animals = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant",
];

const foundAnimal = animals.findIndex((animal) => {
  return animal === "elephant";
});
console.log(foundAnimal);

const startsWithS = animals.findIndex((animal) => {
  return animal[0] === "s";
});
console.log(startsWithS);

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {

  console.log("The value of accumulator: ", accumulator);
  console.log("The value of currentValue: ", currentValue);
  return accumulator + currentValue;
}, 10);
console.log(newSum);

const words = ["unique", "uncanny", "pique", "oxymoron", "guise"];

console.log(
  words.some((word) => {
    return word.length < 6;
  })
);

const interestingWords = words.filter((word) => {
  return word.length > 5;
});
console.log(interestingWords);

console.log(
  interestingWords.every((word) => {
    return word.length > 5;
  })
);
const cities = [
  "Orlando",
  "Dubai",
  "Edinburgh",
  "Chennai",
  "Accra",
  "Denver",
  "Eskisehir",
  "Medellin",
  "Yokohama",
];

const nums = [1, 50, 75, 200, 350, 525, 1000];


cities.forEach((city) => console.log("Have you visited " + city + "?"));


const longCities = cities.filter((city) => city.length > 7);


const word = cities.reduce((acc, currVal) => {
  return acc + currVal[1];
}, "c");

console.log(word);


const smallerNums = nums.map((num) => num - 5);


nums.every((num) => num < 0);
// OR nums.some(num => num < 0);


