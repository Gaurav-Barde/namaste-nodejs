• If you wrap some code into a function, it creates a private space for itself and module works the same way in JS
• When you call require function and give it a path it just wraps all the code in a function & then runs it and that wrapped function is a special function known as IIFE(Immediately Invoked Function Expression)
• An IIFE is a function that is created and executed immediately, without calling it later. eg. (function printName(){ console.log("Gaurav") })()
• So when you use require function in NodeJS, it will take all your code and wraps it in an IIFE and then gives it to V8 engine.
• When the code is wrapped inside an IIFE, module and require are passed as a parameters eg. (function(module, require){...code})(module, require);
• module and require are given to us by the NodeJS. Apart from module & require there are some other parameters also.
• Five steps mechanism of require(path) 1. Resolving the module 2. Loading the module 3. File content is wrapped inside an IIFE(compile) 4. Code Evaluation 5. Caching
• 1. Resolving the module: In this step it checks the given path is a local path, json path or a node:module and accordingly it resolves the module
• 2. Loading the module: file content will be loaded according to the file type identified in the first step
• 3. File content(code) is wrapped inside an IIFE
• 4. Code evaluation: In this step module.exports object is created and then code is executed which is wrapped in an IIFE and then it will update the module.exports object
• 5. Caching: In this step the module will be cached, meaning that if a module is required in one module then the next time in another module NodeJS will return the cached module instead repeating the steps once again
• The code in any module is not directly passed to V8 engine, it is wrapped inside an IIFE and then passed to the V8
• NodeJS is an Open Source project, you can go to NodeJS repo on GitHub and read the code
• LibUv library is one of the most amazing super power NodeJS has. It is the reason why Node is so amazing
• LibUv handles event loop, multi threading, and other important things.
• The difference between an average and amazing developer is curiosity
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
•
•
•
•
•
•
•
