let path = require('path'), fs = require('fs');
let files1 = [];
let data = [];
let data1 = [];
let data2 = [];
let data3 = [];
let j = 0;
function fromDir(startPath, filter) {

    console.log('Directory: ' + startPath + '/');

    if (!fs.existsSync(startPath)) {
        console.log("no dir ", startPath);
        return;
    }

    let files = fs.readdirSync(startPath);
    for (let i = 0; i < files.length; i++) {
        let filename = path.join(startPath, files[i]);
        let stat = fs.lstatSync(filename);
        if (stat.isDirectory()) {
            fromDir(filename, filter); //recurse
        }
        else if (filename.indexOf(filter) >= 0) {
            console.log('-- file found: ', filename);
            data1[j] = "-------------------------------------------- \n" + filename + " found       \n";
            files1[j] = filename;
            j++;
        }
    };
};

fromDir('C:/New/', '.csv');
let wait = require('./wait2.js');
let target;
let l = 0;
let k;


for (k = 0; k < files1.length; k++) {
    target = files1[k];
    wait.start(target, onFileChange, 100000);
}

function onFileChange(type, current, previous) {
    console.log("~~~~~~~~~~~~~~~~~" + type + "~~~~~~~~~~~~~~~~~ \n");
    fs.appendFile('C:/New/Result.json', `\n~~~~~~~~~~${type}~~~~~~~~~~`, (err) => {
        // In case of a error throw err. 
        if (err) throw err;
    })
}


data = data1;
// Write data in 'Result.json' . 
fs.writeFile("C:/New/Result.json", data, (err) => {
    // In case of a error throw err. 
    if (err) throw err;
})




