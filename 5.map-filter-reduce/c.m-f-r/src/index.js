var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// function double(x) {
//   return x * 2;
// }

// const newNumbers = numbers.map(double);
// console.log(newNumbers);

// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });
// console.log(newNumbers);

// //Filter - Create a new array by keeping the items that return true.

// const filteredNumbers = numbers.filter(function (num) {
//   return num > 10;
// });
// console.log(filteredNumbers);

// //Reduce - Accumulate a value by doing something to each item in an array.

// const reducedNumber = numbers.reduce(function (accumulator, currentNumber) {
//   return accumulator + currentNumber;
// });
// console.log(reducedNumber);

// //Find - find the first item that matches from an array.

// const foundNumber = numbers.find(function (num) {
//   return num > 10;
// });
// console.log(foundNumber);

// //FindIndex - find the index of the first item that matches.

// const foundNumberIndex = numbers.findIndex(function (num) {
//   return num > 10;
// });
// console.log(foundNumberIndex);

//Challenge
//create new array from emojipedia that combines the meaning texts and truncates to 100 characters
import emojipedia from "./emojipedia";

const emojiMeanings = emojipedia.map(function (emoji) {
  return emoji.meaning.substring(0, 100);
});

console.log(emojiMeanings);
