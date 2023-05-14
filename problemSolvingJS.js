

//1.Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

function reverseArray(sentence){
  let arr=[];
  for(let i = sentence.length-1 ; i>=0;i--){
      arr.push(sentence[i]);
  }
  return arr;
};
const sentence = ['sense.','make', 'all', 'will', 'This'];
console.log(reverseArray(sentence));


//2.Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.


const greetAliens = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(
      `Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`
    );
  }
};

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);





//3.Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.


const convertToBaby = (animals) => {
  arr = [];
  for (let i = 0; i < animals.length; i++) {
    arr.push("baby " + animals[i]);
  }
  return arr;
};

const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];

console.log(convertToBaby(animals));




//4.We wrote a function, smallestPowerOfTwo(), which takes in an array.

// Within our function, we create a new array called results.
// We then loop through the argument array and calculate the smallest power of two which is greater
// than or equal to the current element before using .push() to add it to results.

const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop:
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop:
            // We needed to create a new variable!
            let j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 


//5.Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through each element in the array and calls politelyDecline() with each of them.

//The .forEach() function should apply politelyDecline() directly; it should NOT merely receive an argument function that uses politelyDecline().




const veggies = ["broccoli", "spinach", "cauliflower", "broccoflower"];

const politelyDecline = (veg) => {
  console.log("No " + veg + " please. I will have pizza with extra cheese.");
};

// 
const declineEverything = (arr) => {
  arr.forEach(politelyDecline);
};

// As a function declaration:
// function declineEverything(arr) {
//       arr.forEach(politelyDecline);
// }

// 
// Using an anonymous function and string interpolation:
const acceptEverything = (arr) => {
  arr.forEach((e) => {
    console.log(`Ok, I guess I will eat some ${e}.`);
  });
};

//
const grudginglyAccept = (veg) => {
  console.log("Ok, I guess I will eat some " + veg + ".");
};
// const acceptEverything = arr => {
//       arr.forEach(grudginglyAccept)
// }

// Using a loop:
// const acceptEverything = arr => {
//  for(let i = 0; i<arr.length; i++){
//     console.log(`Ok, I guess I will eat some ${arr[i]}.`)
//  }
// }
acceptEverything(veggies);
declineEverything(veggies);




//6.

const numbers = [2, 7, 9, 171, 52, 33, 14];

const toSquare = (num) => num * num;

const squareNums = (numbers) => {
  return numbers.map(toSquare);
};

console.log(squareNums(numbers));

/*
7.Write a function shoutGreetings() that takes in an array of strings and returns a new array. This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: 'heya' will become 'HEYA!'

You can use any technique you want to accomplish this task.

You can test your function when you’re ready by passing in the greetings array or by making your own array!*/

const shoutGreetings = arr => arr.map(word => word.toUpperCase() + '!');

/*
// As a function declaration AND using a loop:
function shoutGreetings(arr) {
    let shoutArray = []
    for(let i = 0; i<arr.length; i++){
        shoutArray.push(arr[i].toUpperCase() + '!')
    }
    return shoutArray
}
*/
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings));




/*
Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method, returns that array with the years sorted in descending order.*/

const sortYears=arr =>arr.sort().reverse();



const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

/*
Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays.

let arr1 = ['this', 'not this', 'nor this'];
let arr2 = ['thing 1', 'thing 2', 'this'];
 
justCoolStuff(arr1, arr2); // Should return ['this']*/


const justCoolStuff = (a, b) => a.filter((x) => b.includes(x));

const coolStuff = [
  "gameboys",
  "skateboards",
  "backwards hats",
  "fruit-by-the-foot",
  "pogs",
  "my room",
  "temporary tattoos",
];

const myStuff = [
  "rules",
  "fruit-by-the-foot",
  "wedgies",
  "sweaters",
  "skateboards",
  "family-night",
  "my room",
  "braces",
  "the information superhighway",
];

console.log(justCoolStuff(myStuff, coolStuff));
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]


// 10. check arr.source === 'plant

const isTheDinnerVegan = array => array.every(ingredient => ingredient.source === "plant");

// const isTheDinnerVegan = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].source === "plant") {
//       return true;
//     }
//     return false;
//   }
// };



const dinner = [
  { name: "hamburger", source: "meat" },
  { name: "cheese", source: "dairy" },
  { name: "ketchup", source: "plant" },
  { name: "bun", source: "plant" },
  { name: "dessert twinkies", source: "unknown" },
];

console.log(isTheDinnerVegan(dinner));
// Should print false

//13.
// Write a function, findMyKeys(), that takes in an array of strings which may or may not contain 'keys'.
// If the keys are in the array, your function should return the index at which they can be found. If they’re not in the array, your function should return -1.
const findMyKeys = (arr) => {
  return arr.includes("keys") ? arr.indexOf("keys") : -1;
};

const randomStuff = [
  "credit card",
  "screwdriver",
  "receipt",
  "gum",
  "keys",
  "used gum",
  "plastic spoon",
];

console.log(findMyKeys(randomStuff));
// Should print 4



///


const dogFactory = (name, breed, weight) => {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
    set name(name) {
      this._name = name;
    },
    set breed(breed) {
      this._breed = breed;
    },
    set weight(weight) {
      this._weight = weight;
    },
    get name() {
      return this._name;
    },
    get breed() {
      return this._breed;
    },
    get weight() {
      return this._weight;
    },

    bark() {
      return "ruff! ruff!";
    },
    eatTooManyTreats() {
      return this._weight++;
    },
  };
};

dogFactory("Joe", "Pug", 27);


function factorial(x) {

    // if number is 0
    if (x == 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}
console.log(factorial(6));



//////////////////////////////////////////
// function subLength(str,l){
//   let c = 0;
//   if(str.lastIndexOf(l)===str.indexof(l)){
//     return 0;
//   }
//   for(let i= str.indexof(l); i< str.length ;i++){
        
//   }
// }str.indexof(l)

const subLength=(str,l)=>{
      const re = new RegExp(l, 'g');

    // matching the pattern
    const count = str.match(re).length;
   //if(str.lastIndexOf(l)===str.indexOf(l)){
    if(count < 2 || count >2 ){
    return 0;
  }else{
    return (str.lastIndexOf(l)-str.indexOf(l))+1;

  }
}
// let str ='saas';
// console.log((str.lastIndexOf('a')-str.indexOf('a'))+1);
console.log(subLength('digitize', 'i'));

//////////////////
const subLength = (str, char) => {
  let charCount = 0;
  let len = -1;
  
  for (let i=0; i<str.length; i++) {
    if (str[i] == char) {
      charCount++;
      if (charCount > 2) {
        return 0;
      }
      if (len == -1) {
        len = i;
      } else {
        len = i - len + 1
      }
    }
  }
  if (charCount < 2) {
    return 0;
  }

  return len;
};
//////


const groceries = list => {
  let listString = ''

  for (let i=0; i<list.length; i++) {
    listString += list[i].item;
    if (i < list.length - 2) {
      listString += ', ';
    } else if (i == list.length - 2){
      listString += ' and ';
    }
  }
  
  return listString;
}
