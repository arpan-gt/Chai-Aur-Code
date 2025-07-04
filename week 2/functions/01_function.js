
function greet(name)
{
  console.log(`Welcome ${name}`);
}

greet("Arpan");


let sum=function(a=0,b=0){
  return ` ${a} + ${b} = ${a+b} `;
}

console.log(sum())  // value not passed so b=undefined and results in NaN


let sub=function(a,b)
{
  return (`${a} - ${b} = ${a-b}`);
}
console.log(sub(8,9));



let userName='Arpan';
let fullName=function ()
{
  let userName='Arpan Kumar'
 return `${userName}`;
}

console.log(fullName());
console.log(userName);



//todo write a program to check whether character at give index is lowercase or not 
let str="abcDeFGHijKLMNOp"
let ischarAtLowerCase=function(str,index)
  {
    if(index<0 || index>=str.length)
      {
        return false;
      }
      const char=str.charAt(index);
      return char >='a' && char <='z';
  }
  console.log(ischarAtLowerCase(str,3));