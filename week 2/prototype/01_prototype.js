// * * prototypes are objects that contains all the methods properties of the datatypes like array,object,string etc.

let arr = [1, 2, 3, 4, 5, 6];

// * * signature of map function
//**  return a new array,iterate on each element, passes userFunction

if (!Array.prototype.myMap) 
{
    Array.prototype.myMap = function (userFunction) 
      {
        const result = [];
        for (let i = 0; i < this.length; i++) 
          {
            const value = userFunction(this[i], i);
            result.push(value);
          }
          return result;
    };
}
const newArray=arr.myMap((el) => el * 3);
console.log(newArray)