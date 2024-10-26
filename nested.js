/*
let money = 100;
if (money > 300) {
  console.log("You are rich kid!!!, You can eat biriyaani");
} else {
  if (money > 100) {
    console.log("You are middle class kid, you can eat bred & banana");
  } else {
    if (money > 0) {
      console.log(
        "You have some money, so you can arrive at home with your leg"
      );
    }
  }
}

let price = 900;
if (price > 1000) {
  price = price / 2;
  console.log(`Leader can pay ${price} taka, because leader has 50% discount`);
} else {
  console.log(`Normal people pay ${price + 100} taka`);
}

let moneyForRent = 0;
if (moneyForRent > 1000) {
  console.log("I will call uber car for go to my home");
} else {
  if (moneyForRent > 500) {
    console.log("I will call uber bike for go to my home");
  } else {
    if (moneyForRent > 100) {
      console.log("I will call bus for go to my home");
    } else {
      if (moneyForRent > 50) {
        console.log(
          "Kola khete khete hata suru korbo, joto din lagbe lagug basay powchate"
        );
      } else {
        console.log("Tahole okhanei theke jabo & asroy chaibo j karor basay");
      }
    }
  }
}

// Ternary operator / Condition
// Condition ? when condition is true then execute the code : when condition is false then execute the code;

let age = 12;
age >= 18
  ? console.log("You are ready getting married")
  : console.log("You are child");

let hasDriverLicense = false;
hasDriverLicense === true
  ? console.log("You can drive a car")
  : console.log("You can drive a bicycle because are kid!!😂😂");
*/
let price = 600;
let isLeader = false;
// if (isLeader === true) {
//   price = 0;
// } else {
//   price = price + 100;
// }
// console.log(price);
// isLeader === true ? (price = 0) : (price = price + 100);
// console.log(price);

// if (isLeader === true) {
//   if (price > 1000) {
//     price = price / 2;
//   } else {
//     price = 0;
//   }
// } else {
//   price = price + 100;
// }

price =
  isLeader === true ? (price > 1000 ? price / 2 : (price = 0)) : price + 300;
console.log(price);
