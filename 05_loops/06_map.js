const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// let numb = numbers.map( (num) => {
//     return num + 10
// } )

// console.log(numb);


// Chaininggggg
// let numb = numbers.map( (num) =>  num * 10 ).map( (num) => num + 1 )
let numb = numbers
                .map( (num) =>  num * 10 )
                .map( (number) => number + 1 )

console.log(numb);