let userName = '';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = 'what about this game?'


console.log(`Hello ${userName} , your question is ${userQuestion}.`);
let randNumber = Math.random() * 7;
//console.log(randNumber);
let randomNumber = Math.floor(randNumber);
console.log(randomNumber);
let eightBall = '';
switch (randomNumber) {
  case 0:
    eightBall = eightBall;
    break;
  case 1:
    eightBall ='It is certain' ;
    break;
  case 2:
    eightBall ='It is decidedly so' ;
    break;
  case 3:
    eightBall ='Reply hazy try again' ;
    break;
  case 4:
    eightBall ='Cannot predict now' ;
    break;
  case 5:
    eightBall ='Do not count on it' ;
    break;
  case 6:
    eightBall ='My sources say no' ;
    break;
  case 7:
    eightBall ='Outlook not so good' ;
    break;
  default:
    eightBall='Signs point to yes';
    break;
}
console.log(` Number is  ${randomNumber}  ,\n ${eightBall}.`);
