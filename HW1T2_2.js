function isPalindrome(str){
    let repl = /[^a-zA-Z0-9]/gi    
    let lowStr = str.toLowerCase().replace(repl, ""); // Bring all letters to lower case and remove special characters
    let l = lowStr.length;
 
    for (let i = 0; i < l/2; i++) {//Checking the [i] and [l - 1 - i] characters
       if (lowStr[i] !== lowStr[l - 1 - i]) { //When the characters don't match we exit loop and returning result
            return str + ' - not a palindrome'; 
        }
     }
 
    return str + ' - a palindrome'; //if characters matching - returning result
  }
 
  console.log(isPalindrome('Race fast, safe car'));
   
  console.log(isPalindrome('lalalaltratata'));
 
  console.log(isPalindrome('A roza upala na lapu Azora'));