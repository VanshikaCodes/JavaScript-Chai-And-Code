// const mySymbol = Symbol() 
// const newObj = {
//     name : "Vanshika",
//     [mySymbol] : "myKey1",           //Using symbol as a key
//     age : 19,
//     "location" : "Jaipur",
//     dob: "25-12-2005"
// }

// for (const key in newObj) {
//     console.log(`${key} : ${newObj[key]}`)
// }


// const arr = [1, 2, 3, 4, 5, 10]
// for (const key in arr) {              // index ko iterate krta hai
//     console.log(arr[key]);
// }

// nhi chltaaa
const mp = new Map()
mp.set('IN', "INDIA")
mp.set('US', "USA")
mp.set('FR', "FRANCE")
for (const key in mp) {
    console.log(key);
}