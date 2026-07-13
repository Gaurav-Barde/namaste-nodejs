// require("./xyz");
// const { calculateSum } = require("./calculate/sum");
// const { calculateMultiplication } = require("./calculate/multiply");

// importing from a single file
const { calculateSum, calculateMultiplication } = require("./calculate");
// import { moduleName, calculateSum } from "./sum.js";

// z = 20; this will produce error in ESM but not in CJS

const a = 10;

const b = 20;

calculateSum(a, b);

calculateMultiplication(a, b);
