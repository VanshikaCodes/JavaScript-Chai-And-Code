const useremail = "dnbsd@gmail.com"

if(useremail) {                               //Here useremail is assumed to be true, hence it's a truthy value
    console.log("Got user email");
}
else {
    console.log("Don't got the email");
}

// Falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined

// Falsy value
// else all the values are truthy some includes
// "0", "false", [], {}, function(){}, " "

const array = []
if(array.length ===0) 
    console.log("Array is empty");

const emptyObj = {}
if((Object.keys(emptyObj)).length === 0)
    console.log("Object is empty");


// Nullish Coalescing Operator (??) : null, undefined 
// It checks if the value is null or undefined then take the other value. It's a fallback

// let val1 = 5 ?? 10
// console.log(val1);                       // 5

val1 = undefined ?? 10
console.log(val1);                          //10

// Ternary Operator
// condition  ? true : false
let userLoggedIn = true
userLoggedIn ? console.log("User Logged In") : console.log("User didn't logged in");