const marvel_heros = ["thor", "IronMan", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros); 
// console.log(marvel_heros); // [ 'thor', 'IronMan', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// // to fetch the 3ed index of array of 1st index value then we have to get by below ways
// console.log(marvel_heros[3][1]); // flash

// concat method => combine two or more array and return a new array withou modifying existing array.
const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros); // [ 'thor', 'IronMan', 'spiderman', 'superman', 'flash', 'batman' ]

//  if we want ro merge the aaray element so insteand of concat we are using mostly
// spread operator

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros); // [ 'thor', 'IronMan', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// flat => it will convert into one single array and retuen new array
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); //  [1, 2, 3, 4, 5,6, 7, 6, 7, 4, 5]

// from() =>  to convert any types into array we use from method 
console.log(Array.isArray("Abhishek")) // false
console.log(Array.from("Abhishek")) ; // ['A', 'b', 'h','i', 's', 'h', 'e', 'k']

console.log(Array.from({name: "abhishek"})) // it will give empty array [] 
// beacuse we have to tell on which basis want o convert into array either key or value.
//of() => it will return the new array from set of element.
// useCase :  if you have multiple variable want to convert into array then use of method
let score1 =100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));// [ 100, 200, 300 ]