var path = require('path');
var wait = require('./wait.js');

var target = path.join('C:/New/',  't.txt');

function onFileChange(type, current, previous) {
    console.log(type);
}

wait.start(target, onFileChange, 1000000);

/* License
 * This article, along with any associated source code and files,
 * is licensed under The MIT License
 * https://opensource.org/licenses/mit-license.php
 */
