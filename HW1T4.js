
//  json read-write

function isBoolean(obj) {
    return typeof(obj) === 'boolean';
}

function isArr(obj) {
 return Array.isArray(obj);
}

function isObject(obj) {
    return typeof(obj) === 'object';
}


function isNull(obj) {
    return obj == null;
}

function isString(obj) {
    return typeof(obj) === 'string';
}

function containsText(obj,text) {
    return obj.includes(text);
}

function isNumber(obj, number) {
    return typeof(obj) === 'number';
}

function isEqual(obj, eql) {
    return obj == eql;
}

function isUndefined(obj) {
    return typeof(obj) === 'undefined';
}


function validateFile(fileContent){
    let result = "";

    if(!isBoolean(fileContent.flag)){
        result += "flag: " + JSON.stringify(fileContent.flag) + " - flag  type isn't boolean \r\n";
    }

    if(!isArr(fileContent.myPromises)){
        result += "myPromises: " + JSON.stringify(fileContent.myPromises) + " - myPromises isn't array \r\n";
    }

    if(!isObject(fileContent.element)){
        result += "element: " + JSON.stringify(fileContent.element) + " - element type isn't object \r\n";
    }

    if(!isNull(fileContent.screenshot)){
        result += "screenshot: " + JSON.stringify(fileContent.screenshot) + " - screenshot isn't null \r\n";
    }

    if(!isString(fileContent.elementText)){
        result += "elementText: " + JSON.stringify(fileContent.elementText) + " - elementText type isn't string \r\n";
    }

    if(!isString(fileContent.allElementsText)){
        result += "allElementsText: " + JSON.stringify(fileContent.allElementsText) + " - allElementsText type isn't string \r\n";
        } else    {  let te='const';
            if (!containsText(fileContent.allElementsText, te)) {
                result += "allElementsText: " + JSON.stringify(fileContent.allElementsText) + " - allElementsText isn't contains const \r\n";
                 }
             }

    if(!isNumber(fileContent.counter))  {
        result += "counter: " + JSON.stringify(fileContent.counter) + " - counter type isn't number \r\n";
        } else { 
            if (!(fileContent.counter)>10) {
                result += "counter: " + JSON.stringify(fileContent.counter) + " - counter isn't bigger then 10 \r\n";         
                 }
            }

    if(!isEqual(fileContent.config, "Common")) {
                result += "config: " + JSON.stringify(fileContent.config) + " - config isn't equal Common \r\n";
            }        
    
    let string1 = "FiRst";
    if(isUndefined(fileContent.const)) {
                result += "const: " + JSON.stringify(fileContent.const) + " - const type is undefined \r\n";
                } else {  if (isNull(fileContent.const)) {
                    result += "const: " + JSON.stringify(fileContent.const) + " - counter is null \r\n";         
                     } else {                       
                        let string2 = fileContent.const.toString();
                        if(!isEqual(string2.toLowerCase(), string1.toLowerCase())){
                            result += "const: " + JSON.stringify(fileContent.const) + " - const isn't equal FiRst (case insensitive) \r\n";
                        }       
            }
    }

    if(!isArr(fileContent.parameters)) {
         result += "parameters: " + JSON.stringify(ileContent.parameters) + " - parameters isn't array \r\n";
              }  else {                     
                         if(!isEqual(fileContent.parameters.length, 8)){
                         result += "parameters: " + JSON.stringify(fileContent.parameters) + " - parameters length isn't 8 \r\n";
        } 
    }      

    if(!isString(fileContent.description)){
        result += "description: " + JSON.stringify(fileContent.description) + " - description type isn't string \r\n";
        } else  {
            if (fileContent.description.length <= 5) {
                        result += "description: " + JSON.stringify(fileContent.description) + " - description length <= 5 \r\n";
                            } else {
                                     if (fileContent.description.length >= 13) {
                                             result += "description: " + JSON.stringify(fileContent.description) + " - description length >= 13 \r\n";  }
     } 
    }  
   
 return result;
}
       

function fileRead(file) {
let fs = require("fs");
console.log("\n ~~~Reading~~~ \n");
 let contents = fs.readFileSync(file);
 let jsonContent = JSON.parse(contents);
// Get Value from JSON


 let res;
return res = validateFile(jsonContent);
}


const arrayFiles = ["C:/New/1.json","C:/New/2.json","C:/New/3.json", "C:/New/4.json"];
let file1;
fs = require('fs') ;
let data =[];
let comment=[];
let text;
let resultt;
for (let i = 0; i < 4; i++) {
    file1=arrayFiles[i];
    resultt=fileRead(file1)
    if (!resultt) { 
        console.log("\n OK! Good json: \n" + file1); 
        continue; 
            } else console.log("\n Bad json: " + file1 + "  See comments in Results.txt");   
             comment[i] = resultt;
            // Data which will write in a file. 
            data [i] = "--------------------------------------------------------------------------------- \n" + file1 + " - Results of testing file: \n" + comment[i];

        }
     
 // Write data in 'Result.txt' . 
 fs.writeFile("C:/New/Results.txt", data, (err) => { 
                
    // In case of a error throw err. 
    if (err) throw err; 
}) 

