const crc16 = require("../crc16.js");

it("checks crc for \"rhlab.io\"", ()=>{
	expect(crc16("rhlab.io")).toBe(52639);
});

it("checks to make sure that empty input is thrown", ()=>{
	try{
		crc16();
		fail();
	}catch(e){
		expect(e.toString()).toBe("usage crc16(s:string) ... s is required");
	}
});
