// * * prototypes are objects that contains all the methods properties of the datatypes like array,object,string etc.



//todo ------------------------------------------------------------------------------------------------------

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
console.log('map function prototype');
console.log(newArray);


//todo -------------------------------------------------------------------------------------------------------

//todo : Implement filter prototype function



//**  signature for filter => returns a new array , takes userFunction, iterates on each element and if returns true then push the element to new Array.


if(!Array.prototype.myFilter)
{
    Array.prototype.myFilter=function(userFunction)
    {
      const result=[];
      for(let i=0;i<this.length;i++){
        if(userFunction(this[i]))
          {
            result.push(this[i]);
          };
      };
      return result
    };
};

const filterArray=arr.myFilter((el) => el%3 == 0);
console.log(filterArray);


//todo ------------------------------------------------------------------------------------

// signature for forEach => iterates for each element, userFunction
if(!Array.prototype.myForEach)
{
 Array.prototype.myForEach=function(userFunction)
  {
    for(let i=0;i<this.length;i++)
      {
        userFunction(this[i],i);
      }
  }
}


arr.myForEach((el)=>
  {
    console.log(el*10);
  }
)

