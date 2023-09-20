let DATE = 2050;
let STATUS = "student";
let COUNT = 0;

if ((DATE = 2050)) {
  console.log("January", "New Year’s Day");
  console.log("March", "Human Rights Day");
  DATE = "April";
  console.log(DATE, "Family Day");
  console.log(DATE, "Freedom Day");
  COUNT = COUNT + 4;

  if ((STATUS = "student")) {
    console.log("June", "Youth Day");
    COUNT = COUNT + 1;
  }

  console.log("August", "Women’s Day");
  console.log("September", "Heritage Day");
  DATE = "December";
  console.log(DATE, "Day of Reconciliation");
  COUNT = COUNT + 3;

  if ((STATUS = "parent")) {
    console.log(DATE, "Christmas Day");
    COUNT = COUNT + 1;
  }

  console.log(DATE, "Day of Goodwill");
  COUNT = COUNT + 1;
}

console.log("Your status is:", STATUS);
console.log("The year is:", DATE);
console.log("The total holidays is:", COUNT);
