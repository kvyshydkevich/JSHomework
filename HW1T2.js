
function isPalindrome(str){

    
    var removedChar = str.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase();
    
   
    var reversedPalindrome = removedChar.split('').reverse().join('');
        
    if (removedChar === reversedPalindrome) {
      
        console.log(str + " - a palindrome ");
    } else {
      
        console.log(str + " - not a palindrome ");
    }
    }
      isPalindrome('Bob')

      isPalindrome('Anita lava la tina')

      isPalindrome('A roza upala na lapu Azora')

      isPalindrome('lalalaltratata')