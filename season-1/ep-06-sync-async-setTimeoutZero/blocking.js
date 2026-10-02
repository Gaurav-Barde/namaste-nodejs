const crypto = require("crypto");

// Sync version of pbkdf2: Password Based Key Derivative function version 2
const hashedPassword = crypto.pbkdf2Sync(
  "gaurav",
  "salt",
  50000000,
  15,
  "sha512",
);
console.log(hashedPassword);

// Async version of pbkdf2: Password Based Key Derivative function version 2
crypto.pbkdf2("gaurav", "salt", 5000000, 15, "sha512", (err, derivedKey) => {
  console.log("Hash: ", derivedKey.toString("hex"));
});

console.log("Hello World");
