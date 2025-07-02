// Todo :problem: Create an object representing a type of tea with properties for name,type,and caffeine content

const tea={
  name:"Lemon tea",
  type:"Green",
  caffeine_content:"low"
}

//Todo: problem: Access and print name and type properties of tea object 

console.log(tea.name);
console.log(tea.type)


//Todo: problem: Change the caffeine level of the tea to "medium"
tea.caffeine_content="medium";
console.log(tea.caffeine_content);


//todo : Add a new property origin to the object.
tea.origin="China"
console.log(tea)


//todo: remove the type property from tea object 
delete tea.type;
console.log(tea)


//todo : check if the tea object has origin property in it;
console.log('origin' in tea)


//todo : use a for...in loop to print all properties of tea object

for(let key in tea){
  console.log(`${key} : ${tea[key]}`)
}


//todo: create a nested object representing different types of teas and their properties
const teas=
{
  greentea:
  {
    name:"Green Tea"
  },
  blacktea:{
    name:"Black Tea"
  }
}
console.log(teas)


//todo : create a copy of the tea object
const teaCopy={...tea};// shallow copy

//todo: Add a custom method describe to the tea object that returns a description string.






//todo : Merge two objects representing different teas into one .
