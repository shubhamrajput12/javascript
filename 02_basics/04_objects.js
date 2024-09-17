// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName: {
            firstName: "shubham",
            lastName: "rajput"
        }
    }
}

// console.log(regularUser.fullname?.userFullName);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}

// const obj3 = {obj1, obj2}

// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1,...obj2}
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
    coursename: "js in hindi",
    price:"9999",
    courseInstructuctor: "hitesh"
}

const {courseInstructuctor: instructor} = course;

// console.log(courseInstructuctor);
console.log(instructor);


