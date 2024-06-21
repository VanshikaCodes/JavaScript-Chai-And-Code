const marvel_heroes = ["Thor", "Spiderman", "Ironman"]
const dc_heroes = ["superman", "flash", "batman"]

/*
    // marvel_heroes.push(dc_heroes)             //Pushes the whole dc_heroes array into the marvel heroes and the output will go like [ 'Thor', 'Spiderman', 'Ironman', [ 'superman', 'flash', 'batman' ] ]
    // console.log(marvel_heroes);  
*/             

/*
    const new_heroes = marvel_heroes.concat(dc_heroes)    //Returns a new array
    console.log(new_heroes);                              // Output will be like  [ 'Thor', 'Spiderman', 'Ironman', 'superman', 'flash', 'batman' ] 
*/

/*
    const all_new_heroes = [...marvel_heroes, ... dc_heroes]               // Spreads the arrays could be used for two or more array likewise
    console.log(all_new_heroes);
*/

/*
    const another_array = [1, 2, 3, [4, 5, 6], [7, 8, 9, [10, 11, 12]], 13, 14]
    const real_another_array = another_array.flat(Infinity)                   // Array ke ander array ko remove krta hai upto given depth
    console.log(real_another_array);
*/

console.log(Array.isArray("Ishu"))                 // Returns if the given argument is array or not

const new_arr = Array.from("Ishu")                 // Forms array of given argument
console.log(new_arr)                    

console.log(Array.from({name: "Vanshika"}))        // If array formation is not possible it returns empty array []

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));