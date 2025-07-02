//TODO: problem: Create an array containing different types of teas.
let teas = ["Green tea", "Black tea", "oolong tea", "White tea", "Herbal tea"];


//TODO: problem: add "Chamomile Tea" to the existing list of teas.
teas.push("Chamomile Tea");
console.log(teas);


//TODO: problem: Remove "oolong tea" from list of teas.
let index = teas.indexOf("oolong tea");
if (index > -1) {
  teas.splice(index, 1);
}
console.log(teas);


//TODO: problem: Filter the list to only include teas that are caffinated
const caffinated = teas.filter((tea) => tea != "Herbal tea");
console.log(caffinated);


//TODO: problem: Sort the list of teas in ascending order.
console.log(teas.sort());


//Todo: problem: use a for loop to print each type of tea in the array along with index.
for (let i = 0; i < teas.length; i++) {
  console.log(i + " " + teas[i]);
}


//Todo: problem: use a for loop to count how many teas are caffinated
let count = 0;
for (let i = 0; i < teas.length; i++) {
  if (teas[i] != "Herbal tea") count++;
}
console.log(`Total Caffinated teas in list = ${count}`);


//Todo: problem: use a for loop to create a new array with all teas in uppercase.
let upperCaseTea = [];
for (let i = 0; i < teas.length; i++) {
  upperCaseTea.push(teas[i].toUpperCase());
}
console.log(upperCaseTea);


//Todo: problem: use a for loop to find the tea name with the most characters.
let longestTeaNaame='';
for(let i=0;i<teas.length;i++)
{
    if(teas[i].length>longestTeaNaame.length)
      {
        longestTeaNaame=teas[i]
      }
}
console.log(longestTeaNaame);


//Todo problem: use a for loop to reverse the order of teas in the array

let reversedArray=[];
for(let i =teas.length-1;i>=0;i--)
{
    reversedArray.push(teas[i]);
}
console.log(reversedArray)