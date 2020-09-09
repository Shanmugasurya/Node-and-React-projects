//File operation to write and read data

var file = require('fs');
file.writeFileSync("./demo.txt","Surya"); //Overwrite the existing data

file.appendFileSync("./demo.txt","Welcome"); //Appends with old data

var datafromfile = file.readFileSync('./demo.txt').toString(); // read data from file

var datafile = file.readFileSync('./demo.txt',{encoding:'utf-8'}); //2nd method to read data from file
console.log(datafromfile);
console.log("encoding :" + datafile);