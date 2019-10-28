

// Read Synchrously
/*
var fs = require("fs");
console.log("\n *START* \n");
var content = fs.readFileSync("content.txt");
console.log("Output Content : \n"+ content);
console.log("\n *EXIT* \n");
*/

var fs = require("fs");
 console.log("\n *STARTING* \n");
// Get content from file
 var contents = fs.readFileSync("C:/New/2.json");
// Define to JSON type
 var jsonContent = JSON.parse(contents);
// Get Value from JSON

console.log("content:", jsonContent);
 console.log("flag:", jsonContent.flag);
 console.log("myPromises:", jsonContent.myPromises);
 console.log("element:", jsonContent.element);
 console.log("\n *EXIT* \n");


 console.log("flag  type:", typeof(jsonContent.flag));
 console.log("myPromises  type is array:", Array.isArray(jsonContent.myPromises));

//match1=typeof(jsonContent.flag)===boolean;

if ( typeof(jsonContent.flag)==='boolean' && Array.isArray(jsonContent.myPromises) && typeof(jsonContent.element)===boolean) { console.log("\n *Good* \n");} else console.log("\n *Bad* \n");
