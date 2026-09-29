const fs = require("fs");
const https = require("https");

const fileData = fs.readFileSync("./file.txt", "utf8");

console.log("Sync File Data: ", fileData);

console.log("Hello World");

// https.get("https://dummyjson.com/products/1", (res) =>
//   console.log("Data fetched successfully"),
// );

fs.readFile("./file.txt", "utf8", (err, data) =>
  console.log("file data: ", data),
);

setTimeout(() => console.log("Timer runs successfully"), 5000);

// fs.readFile("./file.txt", "utf8", (err, data) =>
//   console.log("file data: ", data),
// );

function multiplication(a, b) {
  const result = a * b;
  return result;
}

const c = multiplication(1578, 9685);

console.log("Multiplication is: ", c);
