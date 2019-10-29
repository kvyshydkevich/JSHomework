
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
 console.log("config == Common:", jsonContent.config == "Common");


let match1=typeof(jsonContent.flag)==='boolean';
let match2=Array.isArray(jsonContent.myPromises)==='true';
let match3=typeof(jsonContent.element)==='object';
let match4=typeof(jsonContent.screenshot)==='null';
let match5=typeof(jsonContent.elementText)==='string';

let match6;
if (!typeof(jsonContent.elementText)==='string') {
    match6='false';
    console.log("elementText not string" + match6);
   } else { match6=(jsonContent.allElementsText.includes("const"));
console.log("else allElementsText " + match6);
}

let match7;
if (!typeof(jsonContent.counter)==='number') {
    match7='false';
    console.log("not number" + match7);
   } else { match7=((jsonContent.counter)>10);
console.log("else " + match7);
   }

let match8=(jsonContent.config == "Common");

let string1 = "FiRst";
let jsonC1 = jsonContent.const;

let match9;
if(typeof(jsonC1) == "undefined") {
    match9 = 'false';
    console.log("const undef");
} else { if (jsonC1 == "null") {
    match9 = 'false';
    console.log("const null");
} else {
    string2 = jsonC1.toString();
    match9 = string2.toLowerCase() == string1.toLowerCase();
    console.log("const " + match9);
        }
}

let match10;
let arr = jsonContent.parameters;
if (!Array.isArray(jsonContent.parameters)==='true') {
    match10 = 'false';
    console.log("parameters not array");
} else { match10 = arr.length == 8; console.log("parameters is 8: ", match10);}

let match11;
if (!typeof(jsonContent.description) ==='string') {
    match11='false';
    console.log("description not string" + match11);
        } else { 
                if (jsonContent.description.length <= 5) {
                match11='false';
                console.log("description length <= 5");
                                } else {
                     if (jsonContent.description.length >= 13) {
                        match11='false';
                        console.log("description length >= 13");
                       }   else { 
                                match11='true';
                                console.log("description " + match11); 
                       }        
}
        }
if ( match1 && match2 && match3 && match4 && match5 && match6  && match7 && match8 && match9 && match10 && match11) { console.log("\n OK! Good json: \n" + file);} else console.log("\n Bad json: \n" + file);