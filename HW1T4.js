
//  !Not ready yet!

let fs = require("fs");
 console.log("\n Reading \n");

 let contents = fs.readFileSync("C:/New/2.json");

 let jsonContent = JSON.parse(contents);
// Get Value from JSON

console.log("content:", jsonContent);
 console.log("flag:", jsonContent.flag);
 console.log("myPromises:", jsonContent.myPromises);
 console.log("element:", jsonContent.element);
 console.log("\n --------- \n");

 console.log("flag  type:", typeof(jsonContent.flag));
 console.log("myPromises  type is array:", Array.isArray(jsonContent.myPromises));

//match1=typeof(jsonContent.flag)===boolean;

if ( typeof(jsonContent.flag)==='boolean' && Array.isArray(jsonContent.myPromises) && typeof(jsonContent.element)==='object') { console.log("\n Good json \n");} else console.log("\n Bad json \n");
