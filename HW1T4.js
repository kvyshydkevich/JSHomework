
//  !Not ready yet!

file="C:/New/2.json";

let fs = require("fs");
 console.log("\n Reading \n");

 let contents = fs.readFileSync(file);

 let jsonContent = JSON.parse(contents);
// Get Value from JSON

console.log("content:", jsonContent);
 console.log("flag:", jsonContent.flag);
 console.log("myPromises:", jsonContent.myPromises);
 console.log("element:", jsonContent.element);
  console.log("\n --------- \n");

 console.log("flag  type:", typeof(jsonContent.flag));
 console.log("myPromises  type is array:", Array.isArray(jsonContent.myPromises));
 console.log("element type:", typeof(jsonContent.element));
 console.log("screenshot  type:", typeof(jsonContent.screenshot));
 console.log("elementText  type:", typeof(jsonContent.elementText));
 console.log("allElementsText includes const:", jsonContent.allElementsText.includes("const"));
 console.log("counter  type:",  typeof(jsonContent.counter));
  console.log("counter>10:", jsonContent.counter>10);

let match1=typeof(jsonContent.flag)==='boolean';
let match2=Array.isArray(jsonContent.myPromises)==='true';
let match3=typeof(jsonContent.element)==='object';
let match4=typeof(jsonContent.screenshot)==='null';
let match5=typeof(jsonContent.elementText)==='string';
let match6;
if (!typeof(jsonContent.elementText)==='string') {
    match6='false';
    console.log("not string" + match6);
   } else { match6=(jsonContent.allElementsText.includes("const"));
console.log("else " + match6);
}
let match7;
if (!typeof(jsonContent.counter)==='number') {
    match7='false';
    console.log("not number" + match7);
   } else { match7=((jsonContent.counter)>10);
console.log("else " + match7);
   }

if ( match1 && match2 && match3 && match4 && match5 && match6  && match7) { console.log("\n Good json: \n" + file);} else console.log("\n Bad json: \n" + file);
