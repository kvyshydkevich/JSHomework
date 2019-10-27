function isPalindrome(str){
    let repl = /[^a-zA-Z0-9]/gi    
    let lowStr = str.toLowerCase().replace(repl, ""); // Bring all letters to lower case and remove special characters
    let l = lowStr.length;
 
    for (let i = 0; i < l/2; i++) {//Checking the [i] and [l - 1 - i] characters
       if (lowStr[i] !== lowStr[l - 1 - i]) { //When the characters don't match we exit loop and returning result
            return false; 
        }
     }
 
    return true; //if characters matching - returning result
  }
 
 
function printCons(s){

    console.log(s + " - is " + ((isPalindrome(s)) ? "" : "not ") +  "a palindrome");

}


let s1='Race fast, safe car';
let s2='Anita lava la tina';
let s3='lalalaltratata';
let s4='A roza upala na lapu Azora';

printCons(s1);
printCons(s2);
printCons(s3);
printCons(s4);