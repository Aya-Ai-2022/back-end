const input = "turpentine and turtles";

let vowels = ["a", "e", "i", "o", "u"];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === "e") {
    resultArray.push(input[i]);
  }
  if (input[i] === "u") {
    resultArray.push(input[i]);
  }
  //console.log('i is '+ input[i]);
  for (let j = 0; j < vowels.length; j++) {
    //console.log('j is '+ vowels[j]);

    if (input[i] === vowels[j]) {
      //console.log('common is '+ input[i]);
      resultArray.push(input[i]);
    }
  }
}
console.log(resultArray.join("").toUpperCase());
