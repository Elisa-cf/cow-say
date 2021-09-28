const studentInfo = require('./userInformation');
console.log(`Hi, my name is ${studentInfo.name} and I study at ${studentInfo.campus}`);

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));