// Objects could be of singleton(single object is created) or multiton

// Object Constructors   Creates singleton objects
// Object.create()     Creates an array of existing prototype(Refer to mdn)

// Object Literals       Creates multiton objects

const mySymbol = Symbol()      //SYMBOL CREATION
console.log(typeof mySymbol);
const newObj = {
    name : "Vanshika",
    [mySymbol] : "myKey1",           //Using symbol as a key
    age : 19,
    "location" : "Jaipur",
    dob: "25-12-2005"
}

// console.log(newObj);

// console.log(newObj.location);            
// console.log(newObj["location"]);           

// console.log(newObj[mySymbol]);           
// console.log(typeof newObj[mySymbol]);           

// newObj.age = 18
// console.log("Old objects", newObj);
// Object.freeze(newObj)                       //Freezes the values of the object
// newObj.age = 15                             //Changes will not be reflected
// newObj.name = "Ishu"                        //Changes will not be reflected
// console.log(newObj);

newObj.greeting = function(){
    console.log("Hello new Object");
}

newObj.greetingTwo = function(){
    console.log(`Hello new Object creator ${this.name}`); 
}

console.log(newObj);
console.log(newObj.greeting());
console.log(newObj.greetingTwo());