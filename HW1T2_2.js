function isPalindrom(str){
    let rep = /[^a-zA-Z0-9]/gi    
    let lowerStr = str.toLowerCase().replace(rep, ""); // Bring all letters to lower case and remove special characters
    let l = lowerStr.length;
 
    for (let i = 0; i < l/2; i++) {//Checking the [i] and [l - 1 - i] characters
       if (lowerStr[i] !== lowerStr[l - 1 - i]) { //When the characters don't match we exit loop and returning result
            return false; 
        }
     }
 
    return true; //if characters matching - returning result
  }
 
 
function printCons(ss){

    console.log(ss + " - is " + ((isPalindrom(ss)) ? "" : "not ") +  "a palindrome");

}


let st1='Race fast, safe car';
let st2='Anita lava la tina';
let st3='lalalaltratata';
let st4='A roza upala na lapu Azora';

printCons(st1);
printCons(st2);
printCons(st3);
printCons(st4);