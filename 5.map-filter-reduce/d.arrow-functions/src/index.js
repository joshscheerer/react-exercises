import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);

var numbers = [3, 56, 2, 48, 5];

// const newNumbers = numbers.map((x) => x * x);

//Map -Create a new array by doing something with each item in an array.
const newNumbers = numbers.map((x) => x * 2);

//Filter - Create a new array by keeping the items that return true.
const filteredNumbers = numbers.filter((num) => num < 10);

// Reduce - Accumulate a value by doing something to each item in an array.
var reducedNumber = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber);

//Find - find the first item that matches from an array.
const foundNumber = numbers.find((num) => num > 10);

//FindIndex - find the index of the first item that matches.
const foundNumberIndex = numbers.findIndex((num) => num > 10);