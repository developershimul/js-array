// const money = -100;
// if (money > 500) {
//   console.log("You can buy happiness in your budget");
// } else {
//   if (money > 300) {
//     console.log("You can a small bag");
//   } else {
//     if (money > 100) {
//       console.log("You can buy a icecream");
//     } else {
//       if (money > 0) {
//         console.log("You can buy a banana");
//       } else {
//         console.log("You are a fokinni");
//       }
//     }
//   }
// }

// Ternary operator
// let price = 500;
// let isLeader = true;
// if (isLeader === true) {
//   price = 0;
// } else {
//   price = price + 100;
// }
// console.log(price);

// price = isLeader === true ? 0 : price + 300;
// console.log(price);
// if (isLeader === true) {
//   if (price > 1000) {
//     price = price / 2;
//   } else {
//     price = 0;
//   }
// } else {
//   price = price + 1000;
// }

// // Apply ternary operator
// price =
//   isLeader === true ? (price > 1000 ? price / 2 : (price = 0)) : price + 1000;

let price = 500;
isLeader = false;
// if (isLeader === true) {
//   if (price > 1000) {
//     price = price / 2;
//   } else {
//     price = 0;
//   }
// } else {
//   price = price * 2;
// }

price =
  isLeader === true ? (price > 1000 ? price / 2 : (price = 0)) : price * 2;
