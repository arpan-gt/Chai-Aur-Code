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

//todo use splice method

const fruits=["Apple","Mango","Banana","WaterMelon","Muskmelon","lichi","pomegranate","guava","strawberry","papaya"];
console.log('original : ',fruits);

// => removing elements => return array of removed elements
const removed=fruits.splice(4,3);
console.log('Removed Items: ',removed);


// * * adding elements at specific position
fruits.splice(2,0,"Avacardo","cherry");
console.log(fruits)


// * * replacing element 
fruits.splice(3,2,"sugarcane","lemon");
console.log('replaced : ',fruits)


//* * negative index
fruits.splice(-2,2);   // meand from  2nd elementfrom end  delete 2 items
console.log('negative index : ',fruits)



// * * remove till end 
fruits.splice(4);
console.log('removed till end : ',fruits)


// todo -----------------------------------------------------------------------------------------------

// * * Slice method 

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const newArr=arr.slice();   // shallow copied
console.log("Shallow Copy Slice () : ",newArr);


// slice with some arguments

const slicedArr=arr.slice(2);
console.log("Sliced Array  slice(2) :",slicedArr);


//
 const sliceArr2=arr.slice(2,5);
 console.log("slice(2,5) : ",sliceArr2);


 //
const sliceExample = arr.slice(-4, -2);
console.log("slice(-4,-2) : ",sliceExample);


//
const slcArr=arr.slice(-4);
console.log("slice(-4) : ",slcArr);

// todo Write a program to print first n elements of an array  . n can be any positive number
let ar=[1,2,3,4,5,6,7,8,9];
let n=4;
for(let i =0;i<=n;i++)
{
  console.log(`get first ${n} elements : ar[${i}] => ${ar[i]}`)
}


//todo write a program to get last n elements of an array 
let m=3;
for(let i = ar.length-1 ; i >= ar.length-m ; i--)
{
  console.log(`last ${m} elements : ar[${i}] => ${ar[i]}`)
}


  //todo write a program to check whether an element exists in an array or not 
  const arr2=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let isElementPresentInArray = arr2.includes(50);
  console.log('isElementPresentInArray => ',isElementPresentInArray)

  