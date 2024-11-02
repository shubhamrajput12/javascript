//if

const isUserLoggedIn = true;
const temperature = 41;


// if(temperature === 41){
//     console.log("temperature is less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }
// console.log("executed");

// <, >, <=, >=, ==, !=, ===, !==


// const score = 200

// if(score > 100){
//     let power = "fly";
//     console.log(`user power ${power}`);   
// }

// console.log(`user power ${power}`);   

// const balance = 6000;

// if (balance > 500) console.log("test");


const userLoggedIn = true;
const debitCard = true;
const isLoggedInFromEmail= true;
const isLoggedInFromGoogle = false;

if (userLoggedIn && debitCard) {
    console.log("allow to buy courses");
    
}

if (isLoggedInFromEmail || isLoggedInFromGoogle) {
    console.log("user logged in");
    
}