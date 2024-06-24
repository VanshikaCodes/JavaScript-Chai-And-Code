// const tinderUser = new Object()           // Creates singleton object
const tinderUser = {}           //  Creates non-singleton object

// console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.age = 20
tinderUser.isLoggedIn = false
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));                      //Returns Array
// console.log(Object.values(tinderUser));                    //Returns Array
// console.log(Object.entries(tinderUser));                    //Returns each key, value Array
// console.log(Object.hasOwnProperty('name'));                    //Returns whether the property is present in the object or not


const obj1 = {
    1 : 'a', 
    2 : 'b'
}

const obj2 = {
    3 : 'a', 
    4 : 'b'
}

// const obj3 = {obj1, obj2}                      //Same array wli problem
// const obj3 = Object.assign({}, obj1, obj2)
// const obj3 = {...obj1, ...obj2}  
// console.log(obj3);   



const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Ishu",
            lastname : "Srivastava"
        }
    }

}
console.log(regularUser);
console.log(regularUser.fullname.userfullname.firstname);

// Destructuring
// const {fullname : name} = regularUser
// console.log(name);

// JSON
// {
//     "name" : "Ishu",
//     "class" : "10",
//     "id" : 123
// }

// Also JSON
// [
//     "name" : "Ishu",
//     "class" : "10",
//     "id" : 123,
//     {},
//     {}, 
//     {}
// ]