// app.js
var my_module = require('./my_module');

// to return an object instead use the () at the end
// var my_module = require('./my_module')(); // notice the extra invocation parentheses!

my_module.greet();
my_module.add(5, 6);