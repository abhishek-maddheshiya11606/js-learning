// let myDate = new Date();
// console.log(myDate); // 2026-03-15T14:14:03.905Z
// console.log(myDate.toString()); // Sun Mar 15 2026 14:14:57 GMT+0000 
// console.log(myDate.toDateString()); // Sun Mar 15 2026
// console.log(myDate.toLocaleString()); //  3/15/2026, 2:16:14 PM
// console.log(typeof myDate) // object

// let myCreatedDate = new Date(2026,2, 15);
let myCreatedDate = new Date("01-14-2026");
console.log(myCreatedDate.toString()); // Sun Mar 15 2026 00:00:00



let myTimeStamp = Date.now();  // time stamp is used for when we want to get exact tiem and wunt to create a poll or hotel booking time
console.log(myTimeStamp); // 1773584972582 ==> it gives tiem in ms
// if you want to get the time from date so we have to use the getTime() method
console.log(myCreatedDate.getTime()); // 1768348800000  time in ms

//  to covert date into second
console.log(Math.floor(Date.now()/1000)) ; // 1773585291

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday : "long",
})
console.log(newDate);
