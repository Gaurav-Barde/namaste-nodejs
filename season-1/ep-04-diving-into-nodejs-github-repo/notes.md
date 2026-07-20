• If you wrap some code into a function, it creates a private space for itself and module works the same way in JS
• When you call require function and give it a path it just wraps all the code in a function & then runs it and that wrapped function is a special function known as IIFE(Immediately Invoked Function Expression)
• An IIFE is a function that is created and executed immediately, without calling it later. eg. (function printName(){ console.log("Gaurav") })()
• So when you use require function in NodeJS, it will take all your code and wraps it in an IIFE and then gives it to V8 engine.
• When the code is wrapped inside an IIFE, module and require are passed as a parameters eg. (function(module, require){...code})(module, require);
• module and require are given to us by the NodeJS. Apart from module & require there are some other parameters also.
• Five steps mechanism of require(path) 1. Resolving the module 2. Loading the module 3. File content is wrapped inside an IIFE(compile) 4. Code Evaluation 5. Caching
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
