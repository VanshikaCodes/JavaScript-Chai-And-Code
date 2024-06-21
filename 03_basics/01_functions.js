function myName(){
    console.log('I');
    console.log('S');
    console.log('H');
    console.log('U');
}
myName()

function add(a, b){                         // Parameters
    return Number(a) + Number(b)
}

console.log(add(2, null));                      //Arguments
console.log(add(2, "a"));                      // Returns NaN as "a" can't be converted into number

function loginUserMessage(username = "Ladki") {
    return `${username} just logged in`
}
console.log(loginUserMessage("Ishu"));
console.log(loginUserMessage());