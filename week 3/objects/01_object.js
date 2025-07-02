// * * Data Structure in js that contains "key-value" pairs . each key is String and value can be any javascript valid datatype

// * * initialization
let object = {
  userName: "Arpan",
  age: 22,
  gender: "Male",
  address: {
    pincode: 152032,
    village: "Rupana",
    district: "Muktsar",
    state: "Punjab",
    country: "India",
  },
};

// * * updating or adding new properties
object.isMarried = false;

// * * Accessing values
console.log(object);
console.log(object.userName);
console.log(object["userName"]);
console.log(object.address);
console.log(object.address.pincode);
console.log(object["address"]["district"]);

//referencing
let object2 = object;
console.log("object2");
console.log(object2);


//* * updating object2 to see whether it reflect on object   => indeed it will reflect because it is pointing to same location
object2.champion = true;
console.log(object);
console.log(object2);


//* * to deal with this referencing situation we there are concepts shallow copy and deep copy

let obj3={...object2}
obj3.crush=false;
console.log(obj3)