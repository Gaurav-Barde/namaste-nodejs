const fs = require("fs");
const https = require("https");

setTimeout(() => console.log("This will run immediately"), 0);

console.log("Hello World");

https.get("https://dummyjson.com/products/1", (res) => {
  (console.log("Data fetched successfully"), res.resume());
});

fs.readFile("./file.txt", "utf8", (err, data) =>
  console.log("file data: ", data),
);

setTimeout(() => console.log("Timer runs successfully"), 5000);

function multiplication(a, b) {
  const result = a * b;
  return result;
}

const c = multiplication(1578, 9685);

console.log("Multiplication is: ", c);
