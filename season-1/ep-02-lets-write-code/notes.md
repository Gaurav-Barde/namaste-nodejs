• NVM is a Node version manager
• You can check your node version by typing node -v in terminal
• Whenever you install NodeJs there is one more thing automatically installed with it called NPM
• A Very quick and easy way to write NodeJS code is Node REPL
• REPL is an accronym stands for READ, EVALUATE, PRINT, LOOP
• If you type node & hit enter in terminal you will go to a REPL and now you can write any JS code
• REPL is a JS runtime environment
• Whatever JS code write in NodeJS, NodeJS gives that code to V8 engine(parsed into V8 engine) and V8 engine excute that code
• Chrome Browser is similar to NodeJS, it is also uses the V8 engine to execute the JS code and it has some additional Super Powers
• REPL does not work for production level, because we need to create file & folder structure for writing code
• You can execute the written code in a file by using node filename.js command. eg. node App.js
• In JS the global object is known as window. the 'this' keyword also points out to the global object
• The global object given to us by the browser
• The name of the global object in NodeJS is global
• The global object is not a part of the V8 engine, it is one of the super powers of NodeJS
• When you try to print this NodeJS, it will not print the window object but it will print {}
• In browsers the window, this, self, frames points out to global window object
• In Es2020(ES11) ES committee standardized 'globalThis' keyword for accessing the global object to avoid inconsistency across different environments.
• Now you can use globalThis in JS environment be it any browser, NodeJS & other JS environments
