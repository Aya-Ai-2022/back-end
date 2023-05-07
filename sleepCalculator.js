const getSleepHours = (day) => {
  day = day.toLowerCase();
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 6;
      break;
    case "thursday":
      return 5;
      break;
    case "friday":
      return 8;
      break;
    case "saturday":
      return 7;
      break;
    case "sunday":
      return 7;
      break;
    default:
      console.log("Error");
      break;
  }
};
console.log(getSleepHours("tuesday"));

const getActualSleepHours = () => {
  return (
    getSleepHours("Monday") +
    getSleepHours("Tuesday") +
    getSleepHours("Wednesday") +
    getSleepHours("Thursday") +
    getSleepHours("Friday") +
    getSleepHours("Saturday") +
    getSleepHours("Sunday")
  );
};
const getIdealSleepHours = () => {
  const idealHours = 6.5;
  return idealHours * 7;
};
// console.log(getActualSleepHours());

// console.log(getIdealSleepHours());
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("The user got the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "The user got " +
        (actualSleepHours - idealSleepHours) +
        " hour(s) more sleep than he needed this week"
    );
  } else {
    console.log(
      "The user got " +
        (idealSleepHours - actualSleepHours) +
        " hour(s) less sleep than he needed this week.,he should get some rest."
    );
  }
};
calculateSleepDebt();
