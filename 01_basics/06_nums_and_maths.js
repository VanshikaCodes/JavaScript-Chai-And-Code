const score = 400
console.log(score);

const balance = new Number(100.934983498438)       //Exclusively we define object tyoe
console.log(balance);                              // Returns [Number: 100.934983498438]
console.log(balance.valueOf());                    // Returns 100.934983498438

console.log(balance.toString());
console.log(balance.toPrecision(2));             //Round offs the value upto n digits
console.log(balance.toFixed(2));        //fixs decimal to 2 digits

const hundreds = 1000000
console.log(hundreds.toLocaleString());             //puts 0s acc. to U.S. standards
console.log(hundreds.toLocaleString('en-IN'));      //puts 0s acc. to Indian standards

console.log(Number.MIN_VALUE);                     //Properties of number
console.log(Number.MAX_VALUE);


// ****************** MATHS ******************


console.log(Math.abs(-4.9));                        //Returns 4.9
console.log(Math.round(4.9));                       //Returns 5
console.log(Math.floor(4.9));                       //Returns 4   Returns the actual value
console.log(Math.ceil(4.9));                        //Returns 5   Round offs to upper wli value
console.log(Math.sign(-45));                        // Returns sign either is the form of -1 or 1
console.log(Math.min(5,8,3,1,0,-9));
console.log(Math.max(5,8,3,1,0,-1));

console.log(Math.random());                          //Ranges between 0 & 1 by default
console.log((Math.random() * 10) + 1);                          //Retuens values greater than 0
console.log(Math.floor(Math.random() * 10) + 1);                          //Returns random 1 digit number

const min = 10 
const max = 20 
console.log(Math.floor(Math.random() * (max - min + 1) + min) );           // Value will range between max and min