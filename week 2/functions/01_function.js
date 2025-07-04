function greet(name) {
  console.log(`Welcome ${name}`);
}

greet("Arpan");

let sum = function (a = 0, b = 0) {
  return ` ${a} + ${b} = ${a + b} `;
};

console.log(sum()); // value not passed so b=undefined and results in NaN

let sub = function (a, b) {
  return `${a} - ${b} = ${a - b}`;
};
console.log(sub(8, 9));

//
let userName = "Arpan";
let fullName = function () {
  let userName = "Arpan Kumar";
  return `${userName}`;
};

console.log(fullName());
console.log(userName);

//todo write a program to check whether character at give index is lowercase or not
let str = "abcDeFGHijKLMNOp";
let ischarAtLowerCase = function (str, index) {
  if (index < 0 || index >= str.length) {
    return false;
  }
  const char = str.charAt(index);
  return char >= "a" && char <= "z";
};
console.log(ischarAtLowerCase(str, 3));

//todo write a program to strip leading and trailing spaces from a string
let stri = "IamCoding  ";
let trimmedString = function (str) {
  let result = str.trim();
  return `trimmed => "${result}"`;
};
console.log(trimmedString(stri));

//todo  write a function to print odd numbers from  m to n
let print_M_OddNumbers = function (m, n) {
  let result = [];
  for (let i = m; i <= n; i++) {
    if (i % 2 != 0) {
      result.push(i);
    }
  }
  return result;
};

console.log(print_M_OddNumbers(1, 30));

//todo write a function to print  even numbers from m to n

let print_M_Even_Numbers = function (m, n) {
  let result = [];
  for (let i = m; i <= n; i++) {
    if (i % 2 == 0) {
      result.push(i);
    }
  }
  return result.toString();
};
console.log("print_M_Even_Numbers(5, 25) : ", print_M_Even_Numbers(5, 25));

//todo implement either odd function or even function above such that between the range give only limited numbers eg:between 5 to 30 give only first x numbers

let get_Counted_Even_Numbers = function (m, n, counts) {
  let result = [];
  let count = 0;
  for (let i = m; i <= n; i++) {
    if (i % 2 == 0) {
      count++;
      result.push(i);
    }
    if (count === counts) break;
  }
  return result.toString();
};
console.log(
  "get_Counted_Even_Numbers(5, 30, 5) : ",
  get_Counted_Even_Numbers(5, 30, 5)
);

//todo function to print multiplication table

let getMultiplicationTable = function (n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
};
getMultiplicationTable(5);
