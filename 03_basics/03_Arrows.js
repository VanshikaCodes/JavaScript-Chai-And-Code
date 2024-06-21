const user = {
    username : "mitraa",
    price : 100000000,
    welcome : function () {
        console.log(`${this.username}, welcome to my website` );
        // console.log(this);                           //prints all the values of the current context i.e., whole user object will be printed
    }
}
// user.welcome()
// console.log(this);                                        // will return {} as node ke ander koi bhi current object nhi hota

// ************************** Browser ke ander current object, windows hota hai **************************


// *********************** Functions ke ander this kaam nhi krta hai i.e., **************************

// function one(){
//     let username = "ishu"
//     console.log(this.username)                            //can't be accessed
//     console.log(this)                            //returns numerous values
// }

//  ************************** Arrow function ke ander this keyword kaam nhi kfta hai, kyonki functions me hi this kaam nhi krta hai
// const one = () => {
//     let username = "ishu"
//     console.log(this.username) 
// }
// one() 


// const add = (num1, num2) => {
//     return num1 + num2
// }
const add = (num1, num2) => (num1 + num2 )                    //Implicit return

console.log(add(3, 6));