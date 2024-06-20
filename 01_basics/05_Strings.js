let name = "Vanshika"                      //TypeOf name will be string
let value = 50

console.log(name + " is and repo is " + value);

console.log(`Hello, my name is ${name} and my repo value is ${value}`)


const newName = new String("Ishu Srivastava")   //This will be of object type and will be stored in the following manner          newName = { 0: "I", 1 : "s", 2 : "h", 3 : "u"} It also have various functions within it

// This is not allowed as string is immutable
// newName = "Vanshika Srivastava"
// newName = newName.concat(" Srivastava")                    


// Keys Access Of Object Type String
console.log(newName[2]);
console.log(newName.__proto__);


// String Functions
console.log(newName.length);
console.log(newName.toUpperCase());
console.log(newName.toLowerCase());
console.log(newName.charAt(5));
console.log(newName.indexOf('S'));


let word = newName.split(' ')
console.log(word[1]);


console.log(newName);
console.log(newName.valueOf());


