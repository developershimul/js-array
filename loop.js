//for loop
// for (let x = 0; x <= 10; x += 1) {
//   console.log(x);
// }
// for (let i = 1; i <= 100; i = i + 2) {
//   console.log(i);
// }

let numbers = [10, 20, 30, 40, 50, 60, 70];
let doubleNumbers = [];
for (let x = 0; x <= numbers.length - 1; x++) {
  let num = numbers[x];
  let multiplyNum = num * 2;
  doubleNumbers.push(multiplyNum);
}
console.log(doubleNumbers);
