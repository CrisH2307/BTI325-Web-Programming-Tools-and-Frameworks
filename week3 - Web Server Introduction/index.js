//! HTTP PROTOCOL
/*
_ The HTTP Protocol itself is an Application layer protocol - that is, it essentially sits "on top" of an underlying
network-level protocol such as the Transmission Control Protocol (TCP). HTTP is human-readable and extensible, which
makes the protocol extremely easy to extend and to experiment with. New functionality can be introduced simply by 
establishing an agreement between a client and a server and specifying new “headers” – these will enable the client 
and server to pass additional information along with the request or the response. 

Both HTTP requests and responses share a similar structure and are composed of:
+ A start-line that describes the requests to be performed, or its status that is a success or a failure.
This start-line is always a single line.
+ An optional set of HTTP headers specifying the request, or describing the body included in the message.
+ A blank line indicating that all meta-information for the request has been sent.
+ An optional body that contains data associated with the request (like the content of an HTML form), or the document 
associated with a response. The presence of the body and its size is defined by the start-line and the HTTP headers.
*/

//! Modules & Node Package Manager
/*
? Module
_ The concept of "Built-In Modules/ 'require()'" was discussed:
    + By using the global 'require' function, we have loaded a code "module" which contains code
    and logic that we can use it our own solutions

? Writing Module
_ Create our own modules that work the same way, by making use of a global "module" obj - which isn't truly "global"
in the same sense as "console", but instead global to each of your modules, which are located in separate .js file.

? NPM - Node Package Manager
_ Is a core piece of the module based Node ecosystem. The package manager allows us to install and manage
3rd party modules
_ npm consists of three distinct components:
    the website
    the Command Line Interface (CLI)
    the registry

? Globally installing packages
_ You will want to install a package globally. Installing a package globally means you will install it like 
an application on your computer which you can run from the command line, not use it in your application code

? package.json
_  A listing of all the packages your application requires and also which versions are required. It provides 
a simple way for newcomers to your project to get started easily and stay up to date when packages get updated
*/

//! Single Web Server using Express.js
/*
? Project Structure - Express.js
- A minimal and flexible Node.js web application framework that provides a 
robust set of features for web and mobile applications

? Returning .html Files​
_ Returning plain text is fine to test if our routes are configured properly, however if we want to start making
web applications, we should be returning valid HTML documents

? CSS & Images
Now that we know how to send complete HTML files back to the client, the next step is including "static" 
resources, ie: images, CSS, etc. So far, if we wish to respond to a request from a client we must have an 
explicit "route" configured. For example, the "/about" route only works because we have defined the corresponding app.get("/about", ...) function call
*/
