const accountId = 144553;
let accountEmail = "abc@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2; // not allowed

accountEmail = "ab@gmail.com";
accountPassword = "212121";
accountCity = "Bengaluru";

console.log(accountCity);

/*
prefer not to use var
because of issue in block scope and function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

