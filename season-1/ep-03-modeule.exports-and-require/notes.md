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
•
•
•
•
•
•
•
•
•
•
•
•
