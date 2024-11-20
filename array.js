/*
const friend1 = "Javed";
const friend2 = "Karim";
const friend3 = "Rahim";

const friends = ["Javed", "Karim", "Rahim", "Nasim", "Josim"];
console.log(friends);

console.log(years);

console.log(friends.length);
console.log(friends[2]);
friends[friends.length - 1] = "Last Friend";
console.log(friends);

const firstName = "Shimul";
const lastName = "Hossain";
const isHotWeather = true;

const shimul = [
  firstName,
  lastName,
  2024 - 1995,
  "Teacher",
  isHotWeather,
  friends,
];
// console.log(shimul);

const years = [1990, 1995, 1994, 2000, 2005];

const calcAge = function (birthYear) {
  const age = 2024 - birthYear;
  return age;
};
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

let newAge = [calcAge(years[0]), calcAge(years[1]), years([years.length - 1])];
console.log(newAge);

const years = [1996, 1990, 2000, 2008, 2003];
const ageCalculation = function (birthYear) {
  const age = 2024 - birthYear;
  return age;
};
const age1 = ageCalculation(years[0]);
const age2 = ageCalculation(years[2]);
const age3 = ageCalculation(years[years.length - 1]);
// console.log(age1, age2, age3);
const newAge1 = [
  ageCalculation(years[0]),
  ageCalculation(years[2]),
  ageCalculation(years[years.length - 1]),
];
console.log(newAge1);
*/
// Excersise
const calcTips = function (bill) {
  return bill >= 50 && bill >= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [125, 555, 44];
const tips = [calcTips(bills[0]), calcTips(bills[1]), calcTips(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total);
