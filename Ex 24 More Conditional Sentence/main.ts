let mango = "mango";
let uppercaseMango = "MANGO";
let ten = 10;
let twenty = 20;
let fruits = ["apple","orange","banana"];

console.log("Is mango is equal to mango?");
console.log(mango == mango);

console.log("\n Is mango is not equal to mango?");
console.log(mango != mango);

console.log("Is MANGO is equal to mango after converting to lowercase?");
console.log(uppercaseMango.toLowerCase() == "mango");

console.log("Is MANGO is not equal to mango after converting to lowercase?");
console.log(uppercaseMango.toLowerCase() != "mango");

console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);

console.log("\n Is ten is not equal to twenty?");
console.log(ten != twenty);

console.log("\n Is ten is  greater than zero?");
console.log(ten > 0);

console.log("\n Is twenty is  less than 10?");
console.log(twenty < 10);

console.log("\n Is ten is  greater than or equal to five?");
console.log(ten >= 5);

console.log("\n Is twenty is not equal to 10 and twenty  is  greater than 10");
console.log(twenty != 10 && twenty > 30);

console.log("\n Is twenty is  greater than 50 or twenty  is equal to 20");
console.log(twenty > 50 || twenty == 20);

console.log("\n Is twenty is  greater than 50 or twenty  is not equal to 20");
console.log(twenty > 50 || twenty != 20);

console.log("\n Is orange is includes in my fruits array");
console.log(fruits.includes("orange"));

console.log("\n Is orange not includes in my fruits array");
console.log(fruits.includes("orange"));