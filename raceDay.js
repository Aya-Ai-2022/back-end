let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 18;


if (!registeredEarly && age > 18) {
  raceNumber +=1000;
  console.log(`they will race at 9:30 am with race number : ${raceNumber}`);
}else if(registeredEarly && age > 18) {
  console.log(`they will race at 11:00 am with race number : ${raceNumber}`);
}else if( age < 18) {
  console.log(`they will race at 12:30 am with race number : ${raceNumber}`);
}else{
   console.log('Please, Approach  the registration desk.Thanks');
}

