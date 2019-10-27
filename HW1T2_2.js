
function isPalindrome(str){
    let repl = /[^a-zA-Z0-9]/gi    
   let lowStr = str.toLowerCase().replace(repl, ""); // Bring all letters to lower case and remove special characters
   
   var len = lowStr.length;
   for (var i = 0; i < len/2; i++) {
      if (lowStr[i] !== lowStr[len - 1 - i]) {
       console.log(str + " - not a palindrome ");
          return;
        }
    }
    console.log(str + " - a palindrome ");
 }

     isPalindrome('Race fast, safe car');

     isPalindrome('Anita lava la tina');
     
     isPalindrome('lalalaltratata');

     isPalindrome('A roza upala na lapu Azora');