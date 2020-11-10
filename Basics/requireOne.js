/*
- This means that in this same folder, we intend to use the file called count.js
- we assign it to a variable thet is exactly the same as what is exported in the other file
- module.exports = counter;
*/
var counter = require("./count");

console.log(counter(["Peter", "James", "John", "Batholomew", "Matthew"]));