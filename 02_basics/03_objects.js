//singleton

// object literals

const mySym = Symbol("key1");

// Object.create
const jsUser = {
    name: "shubham",
    "full name": "shubham rajput",
    age: 18,
    location: "delhi",
    email: "shubham@yopmail.com",
    isLoggedIn: false,
    lastLoginDays: ["mondays", "saturday"],
    [mySym]: "mykey1"
}

// console.log(jsUser.email);
// console.log(jsUser['email']);
// console.log(jsUser['full name']);
// console.log(jsUser[mySym]);


jsUser.email = "shubham@gmai.com";
// Object.freeze(jsUser);
jsUser.email = "shubham@microsoft.com"

// console.log(jsUser);



jsUser.greeting = function(){
    console.log("hello js user");
    
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());

