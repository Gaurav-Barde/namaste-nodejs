const fs = require("fs");
const https = require("https");

console.log("Hello world");

fs.readFileSync("./file.txt", "utf8");

console.log("readFileAsync ran successfully");

var a = 156789;
var b = 897654;

https.get("https://dummyjson.com/products/1", (res) =>
  console.log("Data fetched successfully"),
);

setTimeout(() => console.log("Timer runs successfully"), 5000);

fs.readFile("./file.txt", "utf8", (err, data) =>
  console.log("file data: ", data),
);

function multiplyFn(a, b) {
  const result = a * b;
  return result;
}

const c = multiplyFn(a, b);

console.log("Multiplication of a & b is: ", c);
