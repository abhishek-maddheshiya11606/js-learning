let score ="33";
let valueNumber = Number(score); // covert in to int and give gaurantee
console.log(typeof score); // string
console.log(valueNumber) // 33

let score1 = "33abc"
let valueNumber1 = Number(score1);
console.log(typeof score1); // string
console.log(valueNumber1) // NaN

let score2 = null
let valueNumber2 = Number(score2);
console.log(typeof score2); // Object
console.log(valueNumber2) // 0


// boolean converion
let isLoggedIn = 1
let booleanIsLoogedIn = Boolean(isLoggedIn);
console.log(booleanIsLoogedIn);
// 1 => true; 0 -> false
// "" => false
// "abhi" => true

// String Conversion
let someNumber = 33
let stringNumber = String(someNumber);
console.log(someNumber); // 33 treat as string
console.log(typeof stringNumber); // string ==> type is string data type

// *********************** Operations ****************************
let value = 3
let negValue = -value;
console.log(negValue)  // -3
// console.log(2+2); // 4
// console.log(2-2);  // 0
// console.log(2*2); // 4
// console.log(2**3); // 8 trated as powe 2 power 3 
// console.log(2%3); //2 

let str1 ="Hello"
let str2 = "Abhishek"
let str3 = str1 +str2
console.log(str3) // HelloAbhisek

console.log("1" +2);  // 12
console.log(1 + "2") //12
console.log("1" + 2 + 2) //122
 console.log(1 + 2 + "2")// 32
 

 console.log(+true) // 1
 console.log(+"") // 0  -> empyt string valie is o that is why 0

 let gameCounter =100
 ++gameCounter;
 console.log(gameCounter); // 101