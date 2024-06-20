let myDate = new Date()
console.log(myDate)                  //Readable form me nhi rhta 
console.log(myDate.getDate())        // Returns date of today
console.log(myDate.getMonth() + 1)        // Returns month in which january starts from 0, so we add 1 to give correct value
console.log(myDate.toDateString())       // returns Thu Jun 20 2024
console.log(myDate.toLocaleString())     //Returns 6/20/2024, 4:40:05 PM

// let myCreatedDate = new Date(2021, 4, 23)
// console.log(myCreatedDate.toLocaleString());
let myCreatedDate = new Date("11-12-2022")
console.log(myCreatedDate.toLocaleString());

 
let myTimeStamp = Date.now()                 //Returns value in millisecond
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.round(myTimeStamp/1000));          //Returns value in seconds


myCreatedDate.toLocaleString('default', {
    month: "long"
})

console.log(myCreatedDate.toLocaleString());