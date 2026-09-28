const fs = require("fs");
const https = require("https");

console.log("Hello World");

fs.readFile("./file.txt", "utf-8", (err, data) => console.log(data));

https.get("https://dummyjson.com/products/1", (res) =>
  console.log("Data fetched successfully"),
);

setTimeout(() => console.log("Timer runs successfully"), 5000);

fs.readFile("./file.txt", "utf8", (err, data) =>
  console.log("file data: ", data),
);

function multiplication(a, b) {
  const result = a * b;
  return result;
}

const c = multiplication(1578, 9685);

console.log(c);
