
function sayMyName() {
    console.log("shubham");

}

// sayMyName();

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
    // const result = number1+number2;
    return number1 + number2;
}

// const result = addTwoNumbers(3, 5);
// console.log("result", result);


function loginUserMessage(userName = "sam") {
    if (userName === undefined) {
        console.log("please enter a username");
        return;
    }
    if(!userName){
        console.log("please enter a username");
        return;
    }
    return `${userName} is logged in`
}

// console.log(loginUserMessage("shubham"));
// console.log(loginUserMessage());



function calculateCarPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCarPrice(100,200,300,400));

const user = {
    userName: "shubham",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`);
    
}

handleObject(user);



const myNewArray = [200, 400,100, 600];

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
