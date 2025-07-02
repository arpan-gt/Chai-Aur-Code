// * * prototypes are objects that contains all the methods properties of the datatypes like array,object,string etc.

let arr = [1, 2, 3, 4, 5, 6];

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (userFn) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
      const value = userFn(this[i], i);
      result.push(value);
    }
    return result;
  };
}

const newArr = arr.myMap((el) => el * 3);
console.log(newArr);

let 