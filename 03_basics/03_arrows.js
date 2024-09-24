const user = {
    userName: "shubham",
    price: 99,
    wecomeMessage: function () {
        console.log(`${this.userName} , welcome to the website`);
        console.log(this);
    }
}

// user.wecomeMessage();
// user.userName = "shubh";
// user.wecomeMessage();


// console.log(this);


// function chai() {
//     console.log(this);

// }

// chai();


// const chai function (){
//     let username ="shubham";
//     console.log(this.username);

// }

// const chai = () => {
//     let username = "shubham";
//     console.log(this.username);
// }


// chai();


// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(2,3));

// implicit return
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({userName: "shubham"})


console.log(addTwo(2,3));


const myArray = [2,4,5,6,7,8];

myArray.forEach();