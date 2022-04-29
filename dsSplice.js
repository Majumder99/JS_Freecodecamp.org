const array = [1, 2, 3, 4, 5, 6, 6, 7, 8];

const newArray = array.splice(3, 2); // first parameter is for the index and second parameter is for the number of items going to delete
//It will also return the removed items as an array

console.log(array);
console.log(newArray);
