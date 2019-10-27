function isPalindrome(str){

    let repl = /[^a-zA-Z0-9]/gi    
    let lowStr = str.replace(repl, "").toLowerCase(); // Bring all letters to lower case and remove special characters
    
    let reversedPalindrome = lowStr.split('').reverse().join(''); //Reversing a string
      
    return(lowStr === reversedPalindrome);  // Checking if reversed string is equal to modified string and return results
}


function printCons(s){

    console.log(s + " - is " + ((isPalindrome(s)) ? "" : "not ") +  "a palindrome"); //prints result into console

}


let s1='Race fast, safe car';
let s2='Anita lava la tina';
let s3='lalalaltratata';
let s4='A roza upala na lapu Azora';

printCons(s1);
printCons(s2);
printCons(s3);
printCons(s4);
