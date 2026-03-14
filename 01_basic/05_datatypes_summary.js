//  Primitive data types
//  7 Types - String, Number, Boolean, null, undefined, Symbol, BigInt
// Number
let score = 100;
let scoreValue = 100.3

// Boolean
const isLoggedIn = true;

// null
const outsideTemp = null;

// undefined
let userEmail;

// Symbol
const id = Symbol('123');
const anotherId = Symbol('123')  // it will trated as unqiue even you keep value same that is magic

console.log(id === anotherId) // false
console.log(id == anotherId)  // false

// BigInt
const biNumber = 34567893565676788n;

// ========= Reference Type (Non Primitive) =========
// Array, Objets, Functions

// Array
const heros = ["shaktiman", "nagRaj", "doga"]

// Object 
let myObj = {
    name : "Abhishek",
    age : 28,
}

// Function ==> you can store a function into variable as well

const myFunction = function(){
    console.log("Hello World");
}

/*
Note :  to find any type of result of data type 

undefined   =   undefinend
null        =   Object
Boolean     =   boolean
Number      =   number
String      =   string
funtion     =   function  ==> we called it as object function
// console.log(typeof null) // type will be Object
// console.log(typeof myFunction) // function
// console.log(typeof bigNumber)
*/
console.log(typeof bigNumber); // undefined
console.log(typeof heros) // object
console.log(typeof myFunction) // function
console.log(typeof myObj) // object

// Note: all non primitive tpes are called function  
// and only function datatypes is called function Object
