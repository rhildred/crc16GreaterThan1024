const crc16 = require("./index.js");

if(process.argv.length > 2){
	console.log(crc16(process.argv[2]));
}else{
	console.log("Usage: " + process.argv[1] + " sInput:string");
}
