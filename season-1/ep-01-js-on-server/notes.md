• What is a server?
• It is a machine or CPU which receives a request and remotely accessible
• How server works behind the scenes?
• so there is a server and client, client is nothing but a users computer which access data a server
• so when the client acess Google.com which is a domain name and every domain name maps to an IP eg. 114.265.124.8 and this IP points to a device or server
• So whenever client try to access Google.com, the client is making a request to server
• Initially JS was the main language which was used inside browser. But after NodeJS you can JS even on server
• Now since JS can run on a server, it gave opportunity to a single developer to be a FullStack dev
• V8 is a JS engine developed by Google which runs in Google Chrome & is written in C++ language
• V8 can be embedded into any C++ program
• You write some JS code, that JS code is read by V8 and then it is converted to a code which machine understands
• NodeJS is a C++ application with V8 embedded into it
• All JS engine follows ECMA script standards or rules so that every JS code behave in a same way in all the browsers
• NodeJS has V8 engine and lot of extra superpowers
• Superpowers are API's on server eg. If yoi want to access database on server, V8 engine cannot do that, so these functionality comes with API's on sever and that are superpowers of NodeJS
• So NodeJS is a C++ application with V8 embedded into it and with some superpowers(API's on server), so this whole thing known as JS runtime
• NodeJS is majorly written in JS 64.4% & 22.6% in C++
• What does V8 do and why it is written in C++ code?
• The computer understands only binary 0's and 1's, on top of this Binary code there is something known as Assembly code written in Assembly language, on top of thos Assembly Code there is Machine code, on top of this machine code there is High level languages code
• C++ is high level language on top of C++ we write down JavaScript
• So the V8(C++ code) takes the JS code and converts into Machine code & Assembly code known low level code
• The X86, ARM etc understands the low level code
