// //npm install prompt-sync
const prompt = require('prompt-sync')();

// console.log("jay shree ram");

// console.log(null == undefined); // true
// console.log(null === undefined); // false

// const a = 10;
// // a=20; // TypeError: Assignment to constant variable.

let no = prompt("Enter a number: ");
console.log(no);
// let b = 20;
// b = 100;

// console.log(b);

// // pop boxes in js

// console.log("hello world");
// let c = prompt("Are you sure? (yes/no): ");
// console.log(c === 'yes');

// console.log(9>5>1)
// Step 1: Evaluate 9 > 5
// 9 > 5 is true, so it returns true.
// Step 2: Evaluate true > 2
// In JavaScript, true is converted to 1 when used in a numerical comparison.
// 1 > 2  // false

// console.log(5>2 && 9>5)


// function func(n){
//     console.log(n);
// }

// // arrow function 
// const deva = (n) =>{
//     console.log(n)
// }
// func(10);
// deva(20);


//SCOPE

var a = 100;
function scope(){
    var a = 10;
    // const b = 20;
    console.log(a)
    // let c = 30;
}


// Keyword	Scope Type	Can Be Reassigned?	Can Be Redeclared?
// var	    Function	✅ Yes	            ✅ Yes
// let	    Block	    ✅ Yes	            ❌ No
// const	Block	    ❌ No	            ❌ No

scope()
// console.log(a)
// console.log(b)
// console.log(c)

// HOISTING 

// console.log(d) // undefined
// var d = 100
// console.log(d) // 100

// console.log(d) // error
// let d = 100
// console.log(d) // 100

// LET AND CONST ARE HOISTEDIN DIFFERENT ZONE IS CALLED AS TEMPORAL DEAD ZOENE & WE CAN NOT ACCESS THE VARIABLE IN TEMPORAL DEAD ZONE

// VAR -- > SCOPED & LET ,CONST --> BLOCK SCOPED

//TYPES OF FUNCTION

// 1 . Function Declaration

function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Output: Hello, Alice!

// 2. Function Expression (can not be hoisted)

const add = function(a,b){
    console.log(a+b)
}

// Arrow Functions

// const deva = (n) =>{
//     console.log(n)
// }

// Function Parameters & Default Values (Functions can take parameters and have default values.)

function greet(name = "Guest") {
    return "Hello, " + name + "!";
}

console.log(greet());        // Output: Hello, Guest!
console.log(greet("David")); // Output: Hello, David!


//Rest Parameters (...args)

// Callback Functions 🔄 (A callback function is a function passed as an argument to another function.)

function processUserInput(name, callback) {
    console.log(callback(name));
}

processUserInput("Emma", greet); // Output: Hello, Emma!


// ARRAY 

// creation

let arr = [1,2,3,4,5,6,7,8,9,10]
console.log(arr)

let numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Method	Description
// push()	Adds an element to the end of the array
// pop()	Removes the last element
// unshift()	Adds an element to the beginning
// shift()	Removes the first element

arr.push(11)
console.log(arr);
arr.pop();
console.log(arr);
arr.shift()
arr.unshift(12)
console.log(arr)

// looping 

arr.indexOf(5) // 4

console.log(arr.includes(9)) // true

// FUNCTIONS IN JS
// MAP 
// (Creates a new array by applying a function to each element of the array.)


// Using map()
// Creates a new array by applying a function to each element.

// let nums = [1, 2, 3, 4];
// let squared = nums.map(num => num * num);
// console.log(squared); // Output: [1, 4, 9, 16]


// Using filter()
// Filters elements based on a condition.
// let ages = [15, 22, 30, 18, 40];
// let adults = ages.filter(age => age >= 18);
// console.log(adults); // Output: [22, 30, 18, 40]

// Using reduce()
// Reduces an array to a single value.
// let sum = nums.reduce((total, num) => total + num, 0);
// console.log(sum); // Output: 10


// ARRAY CONCATNATING

let arr1 = [1,2,3,4,5]
let arr2 = [6,7,8,9,10]

console.log(arr1.concat(arr2))

console.log([...arr1,...arr2])