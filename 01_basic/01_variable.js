const accountId = 14453  // can not chnage
let accountEmail = "abhishek@gmail.com"
var accountPassword= "12345"
accountCity = "jaipur"
let accountSummary;

// accountId =2 // not allowed

accountEmail = "abdg@gmail.com"
accountPassword ="3534478"
accountCity = "Delhi"
console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope

Note : 1.use can use const and let
2. and in js if we only decelared the varibale not assighn
 so  bydefault vale will be undefined
*/

// or pru=int  data in one go and table formate  so use table
console.table([accountId, accountEmail,accountPassword,accountCity,accountSummary]);