

var fs = require('fs');
var options = {
    persistent: true,
    interval: 500
};

function onChanged(current, previous, path, timer, clientCallback) {
    var type = 'File modified.';
    var targ=path;
    if (current.mode === 0 && previous.mode === 0) type = 'No file.';
//    else if (current.mode > 0 && previous.mode === 0) type = 'File created.';
    else if (current.mode === 0 && previous.mode > 0) type = 'File deleted.';

    if (type !== 'No file.') {
        stopWaiting(path);
        clearTimeout(timer);
    }

    clientCallback(type + targ, current, previous);
}

/**
 * Stop watching a given file.
 */
function stopWaiting(path) {
    fs.unwatchFile(path, this);
}

/**
 * Start waiting for a file to change for a given amount of time.
 */
function startWaiting(path, callback, timeout) {
    var targ=path;
    var timer = setTimeout(function () {
            stopWaiting(path);
        
            callback('Timed out.' + path);
    }, timeout);

    fs.watchFile(path, options, function (curr, prev) {
        onChanged(curr, prev, path, timer, callback);
    });
}

exports.start = startWaiting;
exports.stop = stopWaiting;

