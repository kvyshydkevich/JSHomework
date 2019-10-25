
function isPalindrome(str){

    
    var removedChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    
   
    var reversedPalindrome = removedChar.split('').reverse().join('');
        
    if(removedChar === reversedPalindrome){
      
        console.log(str + " - a Palindrome ");
    }else{
      
        console.log(str + " - not a Palindrome ");
    }
    }
      isPalindrome('"Bob"')

      isPalindrome('"Anita lava la tina"')

      isPalindrome('"A roza upala na lapu Azora"')

      isPalindrome('"lalalaltratata"')