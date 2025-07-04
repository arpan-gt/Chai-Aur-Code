//* * String methods

let str="   iLoveCoding   ";

//todo trim str and convert into uppercase;
let trimmedUpper=str.trim().toUpperCase();
console.log(`"   iLoveCoding   " => ${trimmedUpper}`);

//todo use slice,indexOf,replace for the following
let channel="ChaiAurCode"

console.log('slice(4,9) => ',channel.slice(4,9));    // AurCo 
console.log('indexOf("o") => ',channel.indexOf("o")); // 8 gives first occurance of o
console.log('replace("Aur","And") => ',channel.replace("Aur","And")); // replace first occurance of Aur to And


//todo separate Code from ChaiAurCode and replace "e" with "ing";
console.log('slice(7).replace("e","ing") => ',channel.slice(7).replace('e','ing'));


//todo Write a program to check whether a string is blank or not 
let str2="ILoveCoding";

let isStringBlank=str2.trim().length === 0 ? "String is blank" :"String is not blank";
console.log('isStringBlank => ',isStringBlank);


