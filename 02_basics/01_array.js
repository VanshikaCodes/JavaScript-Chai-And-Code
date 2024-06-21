const arr = [3, 8, "Ishu", true, 'r']

// console.log(arr[3]);

// const arr2 = new Array(3, 8, 1, 4)
// console.log(arr2[2]);


// // Array Methods

// console.log(arr.length);

// arr.push(false);
// console.log(arr);

// arr.pop()
// console.log(arr);

// arr.unshift("Name")                //Inserts Value in the starting of the array
// console.log(arr);

// arr.shift()                        //Removes Value from the starting of the array
// console.log(arr);

// console.log(arr.includes(3));
// console.log(arr.indexOf(3));
// console.log(arr.indexOf(9));         //If the array element is not present then it will return -1

// const newArray = arr.join()
// console.log(arr);
// console.log(newArray);                // newArray will have all the elements of arr but in string data type
// console.log(typeof newArray);

console.log("A ", arr)

const n1 = arr.slice(1,3)                // Returns the value from startindex to end - 1(end index is excluded) 
console.log("B ", n1 );
console.log("A ", arr)                   //Don't modifies the original array

const n2 = arr.splice(1, 3)              // Returns the value from start to end(end index is excluded) 
console.log("C ", n2);
console.log("A ", arr)                   //Modifies the original array but cutting thode given range of values
