const score = 400;  
console.log(score);  // 100 - it is considered as number 
// if you want to number data type so you can get
const balance  =  new Number(100); 
console.log(balance); // [Number : 100]

// you can aslo covert number dataType into String with thr help of toString() method
console.log(balance.toString()); // 100 -> it is treated as string and you can perform any string operation
// now you can also check length of string
console.log(balance.toString().length); // 3

/* 
toFixed(number) ==> it is mostly used in e-commerse application
1. it is used for limit the precision means after point how may digit you want to show
ex - 100.00 or 100.0
*/

console.log(balance.toFixed(2));  // 100.00
console.log(balance.toFixed(2));  // 100.0

console.log("=================")
/*
toPrecision()  ==> it is used for eound of the number
1. it return string
2. you can give b/w 1 to 21 number 
*/
const otherNumber = 23.87453
console.log(otherNumber.toPrecision(3));  // 23.9

/*
toLocalString() --> somtime we have no of zeoro  so calculate them and having problem in reading
so with the help of this method we can convert into reprsentation form
1. toLocalString() --> it give value in US standard form
2. toLocalString('en-IN') -> it give value indian standard form
*/
const hundreds = 100000;
console.log(hundreds.toLocaleString()); // 100,000  -> US Standared
console.log(hundreds.toLocaleString('en-IN')); // 1,00,000  -> Indian Standard

// +++++++++++++++++++++++ Maths +++++++++++++++++
/*
1. Maths library comes from js libaray.
2. Math.abs(-4) //    4  => it is absolute function which convert negative 
value into positive value not vice-versa
3. Math.round(4.3) // 4 => if dont want value in decimal then we have to use 
4. Math.ceil(4.2) // 5 => it will take highest value 
5. Math.floor(4.9) // 4 =>  it will take lowest value
*/
console.log(Math); // Object [Math] {}
console.log(Math.abs(-6.9)); // 6.9
console.log(Math.round(4.4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.4)); // 5
console.log(Math.floor(4.4)); // 4
console.log(Math.pow(2, 3));// 2^3 = 8
console.log(Math.min(2,4,6,1,7,8)); // 1 = takes array
console.log(Math.max(2,4,6,1,7,8)); // 8

// Math library mostly used for random method and its value always comes b/w 0 to 1
console.log(Math.random()); // 0.9628054766716831  ==> when you run next time it value will be diff
console.log(Math.random()); // 0.7414552715560037   ==> it is going to change each time
console.log(Math.random()*10 + 1); // +1 adding beacuse may be value come 0.02344 somting so 
// after desimal 0 should not come so we used +1  amd multibly by 10 so 
// if i need value should be greated that one then we multiple 
console.log(Math.floor((Math.random()*10)) + 1); // 7 => always give single digit value

const min =10;
const max =  20;
console.log(Math.floor(Math.random()*(max - min +1)) + min); // after adding min it give 2 digit value