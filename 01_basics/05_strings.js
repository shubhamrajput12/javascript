const name = "shubham";
const repoCount = 50;

// console.log(name + repoCount + "valus");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//note: this is the new way and comes in best practices

const gameName = new String("shubham");
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-5,4);
console.log(anotherString);

const newStringOne = "   shubham    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shubham.com/shubham%20active";

console.log(url.replace('%20','-'));

console.log(url.includes('shubh'));
console.log((url.split('/')));