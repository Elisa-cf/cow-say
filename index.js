const studentInfo = require('./userInformation');
console.log(`Hi, my name is ${studentInfo.name} and I study at ${studentInfo.campus}`);

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : "Hi I'm Elisa and I study at Wild Code School",
    e : "oO",
    T : "U "
}));