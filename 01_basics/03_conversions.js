// #####Number Conversions#####
// let score = 22
// score = String(score)
// console.log(typeof score);

// score = "abc"
// score = Number(score)
// console.log(typeof score);

// score = "44abc"
// score = Number(score)
// console.log(typeof score);
// console.log(score)                      //Gives NaN(Not A Number) cause the variable is a mixture of no. and string

// score = null
// score = Number(score)
// console.log(typeof score);
// console.log(score)                     //Gives 0 as output

// score = undefined
// score = Number(score)
// console.log(typeof score);
// console.log(score)                     //Gives NaN as output


// #####Boolean Conversions#####

// let value = 1
// value = Boolean(value)
// console.log(typeof value);
// console.log(value);                       //Gives True

// value = ""
// value = Boolean(value)
// console.log(typeof value);
// console.log(value);                        //Gives False

// value = "Null"
// value = Boolean(value)
// console.log(typeof value);
// console.log(value);                         //Gives True

// value = null
// value = Boolean(value)
// console.log(typeof value);
// console.log(value);                         //Gives False

// value = undefined 
// value = Boolean(value)
// console.log(typeof value);                 
// console.log(value);                          //Gives False




// *************OPERATIONS****************

// let value = "2"
// console.log(value + value);                          //Gives 22

// value = 2
// let type = 2 + "6"
// console.log(type);
// console.log(typeof type);                          //Gives 26

// value = 2
// console.log("2" + 6);                              //Gives 26

// value = 2
// console.log("2" + 6 + 6);                          //Gives 266

// value = 2
// console.log(2 + 6 + "6");                          //Gives 86



// console.log(+true);
// console.log(+"");  

console.log(null == undefined);