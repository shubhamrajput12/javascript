const accountId = 144552
let accountEmail = "shubham@gmail.com"
var accountPassword = "12334"
accountCity = "jaipur"
let accountState;

// accountId = 2 //not allowed

accountEmail =  "shshsh"
accountPassword = "hisbfks"
accountCity = "USA"

console.log(accountId);

/*
Prefer not to use var
because of issue on block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])