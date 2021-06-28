let words = "Hello everyone";

// 1
let result = words.toUpperCase();
let result2 = result.split(" ");
let result3 = result2.join(" ");

// 2
let resultA = words.toUpperCase().split(" ").join(" ");

console.log(result3);
console.log(resultA);
