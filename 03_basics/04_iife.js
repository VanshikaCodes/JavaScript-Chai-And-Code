// Immediately Invoked Function Expressions(IIFE)
// Global scope ke pollution ko hatane ke liye IIFE ka use kiya jaata hai


// Named IIFE
(function printName(name) {              // OR       (name) => {}();
    console.log(`My name is ${name}`);
})('Hitesh');


// Unnamed IIFE
( () => {
    console.log("DB CONNECTED");
})();