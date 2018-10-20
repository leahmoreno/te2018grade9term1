// import readline-sync module, don't touch!
const READLINE = require("readline-sync");

// fill in object below with all relevant properties (see instructions)
let inputCents = READLINE.question("Hello! Im your change machine! Please enter cents as a positive integer!:  ");
// console.log(`inputCents=${inputCents}`);
let changeMachine={
inputCents:undefined,
quarters:undefined,
dimes:undefined,
nickels:undefined,
pennies:undefined,
// greeting = "Hello! Im your change machine! Please enter cents as a positive integer",
// farewell = "Bye bye!"
greeting:"Hello! Im your change machine! Please enter cents as a positive integer!:",
farewell:"Goodbye! Thanks for coming"
};
// write code below that simulates the change machine in action!
// let inputCents = 64;
let quarters = Math.floor(inputCents/25);
console.log(`${quarters} quarters`);
let remainder = inputCents%25;

let dimes = Math.floor(remainder/10);
console.log(`${dimes} dimes`);
let remainder2= remainder%10;

let nickels= Math.floor(remainder2/5);
console.log(`${nickels} nickels`);
let remainder3=nickels%5
let pennies= Math.floor(remainder3/1);
console.log(`${pennies} pennies`);
console.log(`${changeMachine.farewell}`);





