function replace(string,  num, replString) {
    if(typeof(num) == "undefined") {
        num = 0;
    }

    if(typeof(replString) == "undefined") {
        replString = '';
   }

   let splitStr = string.split(' ');
   for (let i = 0; i < splitStr.length; i++) {
         let   sss=splitStr[i];
         if (sss.length<num+1) { 
                continue; } else {
                    splitStr[i]=splitStr[i].slice(0, num) + replString + splitStr[i].slice(num+1);
             } 
    }
    return splitStr.join(' '); 
}
 
 console.log(replace('To be, or not to be, that is the question: Whether ’tis nobler in the mind to suffer', 3, ',ooops,'));