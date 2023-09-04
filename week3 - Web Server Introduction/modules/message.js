// NOTE: Node.js wraps the contents of this file in a function:
// (function (exports, require, module, __filename, __dirname) { ... });
// so that we have access to the working file/directory names as well
// as creating an isolated scope for the module, so that our
// variables are not global.

let localFunction = () => {
  // a function local to this module
};

let localMessage = "";

module.exports.writeMessage = (msg) => {
  localMessage = msg;
};

module.exports.readMessage = () => {
  console.log(`${localMessage} from ${__filename}`);
};

/*
Notice how our “message” module uses the exports property of the “module” object to store functions
and data that we want to be accessible in the object returned from the require(“./modules/message”);
function call from modEx1.js. Generally speaking, if you want to add anything to the object returned
by “require” for your module, it’s added to the module.exports object from within your module. 
In this case, we only added two functions (readMessage() and writeMessage()).
*/
