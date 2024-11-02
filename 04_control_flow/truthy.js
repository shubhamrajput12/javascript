const userEmail = "shubham@yopmail.com";

if(userEmail){
    console.log("got user email");
    
}else{
    console.log("dont have user email");
    
}

//falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0", 'fasle', " ", [], {}, function(){}


const emailUsers = [];

if(emailUsers.length === 0){
    console.log("array is empty");
    
}

const emptyObj = {};

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
    
}


// Nullish Coalescing Operator (??) : null undefined

let val1;

// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
val1 = null ?? 10 ?? 20;

console.log(val1);


// ternary operator
// condition ? true : false;


