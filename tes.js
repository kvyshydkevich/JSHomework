function isPalindrome(str){

    var repl = /[^a-zA-Z0-9]/gi    
    var lowStr = str.replace(repl, "").toLowerCase(); // Bring all letters to lower case and remove special characters
    
   
    var reversedPalindrome = lowStr.split('').reverse().join(''); //Reversing a string
      
    console.log(str + " is " +
    ((lowStr === reversedPalindrome) ? "" : "not ") +
    "a palindrome");
    // Check if reversed string is equal to modified string and showing results
    }

      isPalindrome('Race fast, safe car')

      isPalindrome('Anita lava la tina')

      isPalindrome('A roza upala na lapu Azora')

      isPalindrome('lalalaltratata')



