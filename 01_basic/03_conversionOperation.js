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
// "" => falase
// "abhi" => true

// String Conversion
let someNumber = 33
let stringNumber = String(someNumber);
console.log(someNumber); // 33 treat as string
console.log(typeof stringNumber); // string ==> type is string data type

// 
