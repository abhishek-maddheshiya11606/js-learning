// array
const myArr = [0,1,2,3,4,5];
const myHeros = ["Shaktiman", "naagraj"];
const myArr2 = new Array(1,2,3,4);
console.log(myArr2[1]); // 2

// Array Method

myArr.push(6); // push method is  add data into array
console.log(myArr); //[
                        // 0, 1, 2, 3,
                        // 4, 5, 6
                        // ]
myArr.pop(); // it will delete the last element of the array.
console.log(myArr) //[ 0, 1, 2, 3, 4, 5 ]

myArr.unshift(9); // it will add the first index and shift all element.
console.log(myArr); //[
                    // 9, 0, 1, 2,
                    // 3, 4, 5
                    // ]

myArr.shift(); // it will delete the first element and all vale will be shify by 1
console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]

console.log(myArr.includes(9)); // false
console.log(myArr.indexOf(9)); // -1 if mot present then return -1 otherwise return indes value
console.log(myArr.indexOf(2)); // 2

const newArray= myArr.join();
console.log(myArr);   // [ 0, 1, 2, 3, 4, 5 ]
console.log(newArray); // convet into string  0, 1, 2, 3, 4, 5 and value will not be in array now

// slice and splice

/*
slice -> return a copy of  a section of an array excluding last range element and original array will not change
splice -> return a copy of an arry with including the last range as well and chnage the original arry mean that portion will be removed form original arry
*/
// it start form index if i pass 1,3 then it start from 1 index not zero
console.log("A", myArr); // A [ 0, 1, 2, 3, 4, 5 ] ==> original array
const myn1 = myArr.slice(1,3);   

console.log(myn1);// [ 1, 2 ]
console.log("B", myArr);  // B [ 0, 1, 2, 3, 4, 5 ]  ==> after slice original array is not changed

const myn2 = myArr.splice(1,3); 

console.log(myn2); // [ 1, 2, 3 ]
console.log("C", myArr);  // C [ 0, 4, 5 ] ==> original array is changed that portion is excluded form original arry
