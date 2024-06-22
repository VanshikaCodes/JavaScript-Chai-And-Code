// const coding = ["JS", "RUBY", "CSS", "HTML", "DB"]

// coding.forEach(function (items) {
//     console.log(items);
// })

// Arrow Function
// coding.forEach( (items) => {
//     console.log(items);
// })

// Passing function as a parameter
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const coding = [
    {
        langName : "python",
        langFileName : "py"
    },
    {
        langName : "Java",
        langFileName : "java"
    },
    {
        langName : "javascript",
        langFileName : "js"
    }
]

coding.forEach( (item) => {
    console.log(item.langName)
} )