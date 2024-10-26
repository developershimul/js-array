/*
// Task #1 : Simple burger price
let burgerPrice = 300;
if (burgerPrice > 500) {
  console.log("You can eat burger & coke is free for you");
} else {
  console.log("Coke price 30 taka");
}

// Task #2 : Calculate BMI
let weight = 60;
let height = 5;
let bmi = (weight / height) * 2;
bmi = parseFloat(bmi.toFixed(3));
console.log(bmi);
if (bmi < 18.5) {
  console.log("You are underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("You are normal weight person");
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log("You are overweight");
} else {
  console.log("You are obese😒😒");
}

// Result grading system
let marks = 64;
if (marks >= 80 && marks <= 100) {
  console.log("Your letter grade is A+");
} else if (marks >= 70 && marks <= 79) {
  console.log("Your letter grade is A");
} else if (marks >= 60 && marks <= 69) {
  console.log("Your letter grade is A-");
} else if (marks >= 50 && marks <= 59) {
  console.log("Your letter grade is B");
} else if (marks >= 40 && marks <= 49) {
  console.log("Your grade is C");
} else if (marks >= 33 && marks <= 39) {
  console.log("Your grade is D");
} else if (marks >= 0 && marks <= 32) {
  console.log("Your are fail ssc exam");
} else {
  console.log("Invalid number, Please enter correct number");
}
*/
// Ticket fare calculator
let rent = 800;
let age = 65;
let student = false;
if (age < 10) {
  console.log("Tomar vara lagbe na, tumi baccha");
} else if (student === true) {
  rent = rent / 2;
  console.log("50% discount for students");
} else if (age >= 60) {
  rent = rent - (rent * 15) / 100;
  console.log(`You will pay ${rent} taka`);
} else {
  console.log(`Ticket fare ${rent} taka`);
}
