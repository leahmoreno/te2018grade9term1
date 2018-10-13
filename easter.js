// import readline-sync module, don't touch!
const READLINE = require("readline-sync");
let y =READLINE.question("Type the year for Easter: ");
console.log(`y=${y}`);



// Write your program below!
// First line should get user input (year) and store it in variable y.
let a = Math.floor(y%19);
console.log(`a=${a}`);
let b = Math.floor(y/100);
console.log(`b=${b}`);
let c = Math.floor(y%100);
console.log(`c=${c}`);
let d = Math.floor(b/4);
console.log(`d=${d}`);
let e = Math.floor(b%4);
console.log(`e=${e}`);
let f = Math.floor((b+8)/25);
console.log(`f=${f}`);
let g = Math.floor((b-f+1)/3);
console.log(`g=${g}`);
let h = Math.floor((19*a+b-d-g+15)%30);
console.log(`h=${h}`);
let i = Math.floor(c/4);
console.log(`i=${i}`);
let k = Math.floor(c%4);
console.log(`k=${k}`);
let r = Math.floor((32+2*e+2*i-h-k)%7);
console.log(`r=${r}`);
let m = Math.floor((a+11*h+22*r)/451);
console.log(`m=${m}`);
let n = Math.floor((h+r-7*m+114)/31);
console.log(`n=${n}`);
let p = Math.floor((h+r-7*m+114)%31);
console.log (`In year ${y} , Easter falls on ${n}/${p+1}`)
