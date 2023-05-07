console.log('hi');

const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
  switch (userInput) {
  case 'rock':
  case 'paper':
  case 'scissors':
  case 'bomb':

    return userInput;
    break;
 
  default:
    console.log('Error');
    break;
}
};

//console.log(getUserChoice('hhh'));

function getComputerChoice(){
  const choiceVariable= Math.floor(Math.random()*3);
  switch(choiceVariable){

  case 0:
    return 'rock' ;
    break;
  case 1:
    return 'paper' ;
    break;
  case 2:
    return 'scissors';
    break;
 
  default:
    console.log('Error');
    break;
}


}
//console.log(getComputerChoice());
function determineWinner( userChoice , computerChoice){
 
 if (userChoice === computerChoice) {
  return 'The game is a tie!';
}else if(userChoice === 'bomb'){
  return 'You won!';

}else if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }}else if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}else if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
}
//console.log(determineWinner('paper', 'scissors'));
//console.log(determineWinner('paper', 'paper'));
//console.log(determineWinner('paper', 'rock'));
const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(`You choose:  ${userChoice}`);
  console.log(`The computer choose:  ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
