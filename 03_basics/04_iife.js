// function chai(){
//     console.log("DB connected");   
// }

// chai();

// use of iife to remove the global scope pollution
(function chai() {
    //named iife
    console.log("DB connected");

})();

(() => {
    console.log("DB Two");

})();

((name) => {
    console.log("Name", name);

})("shubham");