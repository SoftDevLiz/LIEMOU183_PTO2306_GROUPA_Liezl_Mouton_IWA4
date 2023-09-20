let DATE = 2050;
let STATUS = "parent";
let COUNT = 0;

if ((date = 2050)) {
  console.log("January", "New Year’s Day");
  console.log("March", "Human Rights Day");
  date = "April";
  console.log(date, "Family Day");
  console.log(date, "Freedom Day");
  COUNT = COUNT + 4;

  if ((status = "student")) {
    console.log("June", "Youth Day");
    COUNT = COUNT + 1;
  }

  console.log("August", "Women’s Day");
  console.log("September", "Heritage Day");
  date = "December";
  console.log(date, "Day of Reconciliation");
  COUNT = COUNT + 3;

  if ((status = "parent")) {
    console.log(date, "Christmas Day");
    COUNT = COUNT + 1;
  }

  console.log(date, "Day of Goodwill");
  COUNT = COUNT + 1;
}

console.log("Your status is:", status);
console.log("The year is:", date);
console.log("The total holidays is:", COUNT);
