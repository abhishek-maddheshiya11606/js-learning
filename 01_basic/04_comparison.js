// simple compariosn
console.log(2>1); // true
console.log(2>=1) // true
console.log(2<1) // false
console.log(2==1) // false
console.log(2!=1) // true

// ================
// js automaticatically convert "2" and "02"into number
console.log("2" > 1) //  --> true
console.log("02" > 1) // true

// ======================
/*
Note : the reason is that an equal check == and comparision >,<, <=, >= work differently in js
1. Comparision convert null to number, treating it as zero
that's why (3rd option) null >= 0 is true and (1st option) null > 0 is false
*/
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true -> reason you can into above note(here null convert into 0 )

// same foR undefine as well but in this case comparioson is alwas fALSE
console.log("===========")

console.log(undefined ==0) // false
console.log(undefined > 0) // false -here also undefined convet but after that convert its value is also undefined
console.log(undefined < 0) // false

//  strict check means compare with tripple equal (===) 
// it compare the value and type(data type) as well and 
// double equal (==) check only value
console.log("2" == 2) // true ==> "2" is convert into number 
console.log("2" === 2) // false
