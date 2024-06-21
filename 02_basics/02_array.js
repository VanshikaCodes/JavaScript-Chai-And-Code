const marvel_heroes = ["Thor", "Spiderman", "Ironman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)             //Pushes the whole dc_heroes array into the marvel heroes and the output will go like [ 'Thor', 'Spiderman', 'Ironman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heroes);               

const new_heroes = marvel_heroes.concat(dc_heroes)    //Returns a new array
console.log(new_heroes);                              // Output will be like  [ 'Thor', 'Spiderman', 'Ironman', 'superman', 'flash', 'batman' ]

