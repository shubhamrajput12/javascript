// Primitve datatypes

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt.


const score = 100;
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);


// const bigNumber = 124123123412341234n;

// Reference (Non primitive)
 
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj ={
    name:"shubham",
    age:22
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof bigNumber);




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (Primitive) , Heap (Non - primitive)

let myYoutubeName = "shubham@google.com";
 let anotherName = myYoutubeName;

 anotherName = "chaiorcode";

 console.log(myYoutubeName);
 console.log(anotherName);

 let userOne ={
    email: "shubham@yopmail.com",
    upi: "shubham@oksbi"
 }
 userTwo = userOne;

userTwo.email = "shubham@google,com";
console.log(userOne.email);
console.log(userTwo.email);
 