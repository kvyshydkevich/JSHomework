let path = require('path'), fs = require('fs');
let filesFound = [];
let data = [];
let filesToJson = [];
let j = 0;

function searchFiles(startPath, filter) {
    //   console.log('Directory: ' + startPath );
    if (!fs.existsSync(startPath)) {
        console.log("no dir ", startPath);
        return;
    }

    let files = fs.readdirSync(startPath);
    for (let i = 0; i < files.length; i++) {
        let filename = path.join(startPath, files[i]);
        let stat = fs.lstatSync(filename);
        if (stat.isDirectory()) {
            searchFiles(filename, filter); //recurse searching
        }
        else if (filename.indexOf(filter) >= 0) {
            console.log('-- file found: ', filename);
            filesToJson[j] = "-------------------------------------------- \n" + filename + " found       \n";
            filesFound[j] = filename;
            j++;
        }
    };
};

searchFiles('C:/New/', '.csv');
let target;
let k;
let time = 100000;



let options = {
    persistent: true,
    interval: 500
};

function onChanged(current, previous, path, timer, clientCallback) {
    let type = 'File modified.';
    let targ = path;
    if (current.mode === 0 && previous.mode === 0) type = 'No file.';
    else if (current.mode === 0 && previous.mode > 0) type = 'File deleted.';

    if (type !== 'No file.') {
        stopWaiting(path);
        clearTimeout(timer);
    }

    clientCallback(type + targ, current, previous);
}

//  Stop watching file

function stopWaiting(path) {
    fs.unwatchFile(path, this);
}

// Start waiting for a file to change

function startWaiting(path, callback, timeout) {
    let targ = path;
    let timer = setTimeout(function () {
        stopWaiting(path);
        callback('Timed out.' + path);
    }, timeout);

    fs.watchFile(path, options, function (curr, prev) {
        onChanged(curr, prev, path, timer, callback);
    });
}

for (k = 0; k < filesFound.length; k++) {
    target = filesFound[k];
    startWaiting(target, onFileChange, time);
}

function onFileChange(type, current, previous) {
    console.log("~~~~~~~~~~~~~~~~~" + type + "~~~~~~~~~~~~~~~~~ \n");
    fs.appendFile('C:/New/Result.json', `\n~~~~~~~~~~${type}~~~~~~~~~~`, (err) => {
        // In case of a error throw err. 
        if (err) throw err;
    })
}


data = filesToJson;
// Writes data in 'Result.json' . 
fs.writeFile("C:/New/Result.json", data, (err) => {
    // In case of a error throw err. 
    if (err) throw err;
})

