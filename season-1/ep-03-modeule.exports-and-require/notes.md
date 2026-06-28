• Whenever you have NodeJS Application there is one entry point in your application that entry point is a file that we give with node filename command.
• In NodeJS different files of code are known as modules.
• You can import a module in another module by using require (filepath) function eg. require("./XYZ.js");
• When you import other codes using require function the code from imported file will run first and then it will run the code from current file
• Whenever you run any program in NodeJS require function is always available, similarly global is always available
• You cannot directly access variables, functions or methods from imported module into current module simply by using require function import
• Modules protect their variables and functions from leaking by default
• If you want to access other modules variables and functions then you need to explicitly export those from that module. eg. module.exports = calculateSum;
• And to import the exported function or variable, you need to do: const calculateSum = require("./sum.js");
• If you want to export more than one function from a module then you need to wrap those in an object. eg. module.exports = {calculateSum: calculateSum, calculateDivision: calculateDivision}
• While importing you can use same object to import eg. const obj = require("./sum.js"); and then obj.calculateSum()
• While exporting you can use JS short hand if the key & value name are both same eg. instead of writing module.exports = {calculateSum: calculateSum, calculateDivision: calculateDivision} you can write module.exports = {calculateSum, calculateDivision}
• And while importing you can do destructuring on the fly, so instead of writing const obj = require("./sum.js") you can write const {calculateSum} = require("./sum"). you can also omit .js extension in the require function
• Important learning: you cannot access a modules private functions or variable unless that module allow it to be
• This module pattern of exporting and importing is known as common.js modules or CJS
• There is one more module pattern known as ES modules or MJS
• In NodeJS by default, common JS module is enabled, to enable the ES module you need to create package.json config file and inside that file you need to set "type" property to "module" value like this {"type" : "module"}
• In ES module while exporting you need to use a keyword "export" in front of a function or variable that needs to be exported eg. export function calculateSum(){...} or export moduleName = "Sum.js"
• And while importing you need to use import keyword before a function or variable that needs to be imported eg. import {moduleName, calculateSum} from "./sum.js";
• The ES module pattern is enabled by default in most of the modern front-end libraries and frameworks eg. React, Angular etc.
• Common JS Modules(CJS) is an older way and ES Modules(ESM or MJS(Module JS)) is a newer way to import & export the modules
• The OpenJS foundation is now saying that going forward ES modules will be the standard way of importing & exporting modules
• When CJS is require a module it will do it in a synchronous way but ESM's import has async option
• In CJS code is run in non-strict mode while in ESM the code is run in strict mode
• If you log module.export it will print an empty object {}
• You can also export function & variables like this: module.exports.calculateSum = calculateSum;
•
•
•
•
•
•
•
