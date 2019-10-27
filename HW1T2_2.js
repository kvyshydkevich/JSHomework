
function isPalindrome(str){
   let repl = /[^a-zA-Z0-9]/gi    
   let lowStr = str.toLowerCase().replace(repl, ""); // Bring all letters to lower case and remove special characters
   let l = lowStr.length;

   for (let i = 0; i < l/2; i++) {//Checking the [i] and [l - 1 - i] characters
      if (lowStr[i] !== lowStr[l - 1 - i]) { //When the characters don't match we exit loop and writing in console results
        console.log(str + " - not a palindrome "); 
        return; 
        }
    }
    console.log(str + " - a palindrome "); //if characters matching - writing in console results
 }

isPalindrome('Race fast, safe car');

isPalindrome('Anita lava la tina');
     
isPalindrome('lalalaltratata');

isPalindrome('A roza upala na lapu Azora');