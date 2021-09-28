const studentInfo = require('./userInformation');
const cowsay = require("cowsay");


console.log(cowsay.say({
    text : `Hi, my name is ${studentInfo.name} and I study at ${studentInfo.campus}`,
    e : "oO",
    T : "U "
}));