const user = {
    userName: "shubham",
    price: 99,
    wecomeMessage: function(){
        console.log(`${this.userName} , welcome to the website`);
        console.log(this);
    }
}

// user.wecomeMessage();
// user.userName = "shubh";
// user.wecomeMessage();


console.log(this);


function chai(){

}