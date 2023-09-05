console.log("Bhenchod");

// __filename is be used to obtain file containingthe code being executed as well as the directory. '
// This is the resolved absolute path of this code file.
console.log(__filename);

console.log(__dirname);

setTimeout(function () {
  console.log("Hello after 1 second");
}, 1000);
