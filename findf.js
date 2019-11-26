let path = require('path'), fs = require('fs');
let files1 = [];
let data = [];
let data1 = [];
let data2 = [];
let data3 = [];
let j = 0;

  
function onFileChange( k, current, previous) {
    console.log(current,'fffffffffffff');
    data2[k] = "------------------------------------------- \n" + current+ "      \n";
}

function fromDir(startPath, filter) {

    console.log('Starting from dir ' + startPath + '/');

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
            console.log('-- found: ', filename);
            data1[j] = "----------------------------------------------------------------------------------------- \n" + filename + " found       \n";
            files1[j] = filename;
            j++;
        }
    };
};

fromDir('C:/New/', '.csv');
console.log('-- files: ', files1);

//let l;


  for (let k = 0; k < files1.length; k++) {
    target = files1[k];
    //  l=files1.length+k;
    wait.start(target, onFileChange, 1000000);
    onFileChange(k, target)
  }

  
//data3 = checkChange();
console.log("data2" + data2);
data = data2.concat(data1);


// Write data in 'Result.json' . 
fs.writeFile("C:/New/Result.json", data, (err) => {

    // In case of a error throw err. 
    if (err) throw err;
})



