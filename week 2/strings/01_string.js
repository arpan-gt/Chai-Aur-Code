//* * String methods

let str="   iLoveCoding   ";

//todo trim str and convert into uppercase;
let trimmedUpper=str.trim().toUpperCase();
console.log(`"   iLoveCoding   " => ${trimmedUpper}`);

//todo use slice,indexOf,replace for the following
let channel="ChaiAurCodeAur"

console.log('slice(4,9) => ',channel.slice(4,9));    // AurCo 
console.log('indexOf("o") => ',channel.indexOf("o")); // 8 gives first occurance of o
console.log('replace("Aur,"And) => ',channel.replace("Aur","And")); // replace first occurance of Aur to And
